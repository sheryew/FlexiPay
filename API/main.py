from flask import Flask, request
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import requests
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)


collateral_post_args = reqparse.RequestParser()
collateral_post_args.add_argument("funds", type=float, help="wallet address of user is required", required=True)
collateral_post_args.add_argument("nftUid", type=str, help="UID of NFT collateral is required", required=True)

collateral_get_args = reqparse.RequestParser()
collateral_get_args.add_argument("walletAddress", type=str, help="wallet address of user is required", required=True)

exchange_get_args = reqparse.RequestParser()
exchange_get_args.add_argument("usd", type=float, help="amount of usd is required", required=True)

QrInformation_get_args = reqparse.RequestParser()
QrInformation_get_args.add_argument("bankAccountNumber", type=str,help="Merchant Bank Account Number is required", required=True)
QrInformation_get_args.add_argument("transactionAmount", type=str,help="Transaction Amount is required", required=True)

class Exchange(Resource):
    def post(self):
        args = exchange_get_args.parse_args()
        url = "http://api.coinlayer.com/live?access_key=73e55eb07d4f17fb5d6caeca24e9477a"
        response = requests.get(url).json()
        rate = response['rates']['ETH']
        return {'ETH': args['usd'] / rate}, 201
    

class Collateral(Resource):

    def post(self, walletAddress):
        headers = {
            "accept": "application/json",
            "Authorization": "c25da947-4699-47cb-b783-43d795249e67"
        }
        args = collateral_post_args.parse_args()
        url = "https://api.nftport.xyz/v0/transactions/stats/" + args['nftUid'] + "?chain=ethereum"
        response = requests.get(url, headers=headers)
        response = response.json()
        print(response)
        if response['statistics']['floor_price'] >= args['funds']:
            return {"result": "success"}, 201
        else:
            return {"result": "failed"}, 201

    def get(self, walletAddress):
        headers = {
            "accept": "application/json",
            "Authorization": "c25da947-4699-47cb-b783-43d795249e67"
        }
        # args = collateral_get_args.parse_args()
        url = "https://api.nftport.xyz/v0/accounts/" + walletAddress + "?chain=ethereum&page_size=50&include=metadata"
        response = requests.get(url, headers=headers)
        response = response.json()
        return response, 201


class QrInformation(Resource):
    def get(self):
        args = QrInformation_get_args.parse_args()
        print(request.form)




api.add_resource(Collateral, "/collateral/<string:walletAddress>")
api.add_resource(Exchange, "/exchange")
api.add_resource(QrInformation,"/transact")

if __name__ == "__main__":
    app.run(debug=True)