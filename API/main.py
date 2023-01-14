from flask import Flask, request
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

Loan_get_args = reqparse.RequestParser()
Loan_get_args.add_argument("transactionAmount", type=float,help="Transaction Amount is required", required=True)
Loan_get_args.add_argument("merchantAccount", type=str,help="merchantAccount is required", required=True)

Loan_put_args = reqparse.RequestParser()
Loan_put_args.add_argument("transactionAmount", type=float,help="Transaction Amount is required", required=True)
Loan_put_args.add_argument("merchantAccount", type=str,help="Merchant Account is required", required=True)

PANDA_BANK_ACCOUNT_NUMBER= "888-8888-88"

accounts = {"652-3342-22": {"Account Holder": "IKEA", "Balance": 2002.87},
            "923-1234-66":{"Account Holder": "Singapore General Hospital", "Balance": 6008.73},
            "123-4567-89":{"Account Holder": "Courts", "Balance": 78920.43},
            PANDA_BANK_ACCOUNT_NUMBER: {"Account Holder": "Panda Bank", "Balance": 9999999}
            }

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
        url = "https://api.nftport.xyz/v0/accounts/" + walletAddress + "?chain=goerli&page_size=50&include=metadata"
        response = requests.get(url, headers=headers)
        response = response.json()
        nftList = []
        for nft in response['nfts']:
            nftList.append({"token_id": nft['token_id'], "contract_address": nft['contract_address']})
            headers = {"accept": "application/json"}
        for nft in nftList:
            url = f"https://eth-goerli.g.alchemy.com/nft/v2/TaUU5yuSMWTtAY2xs4ymwzZoBpSN_Pe4/getNFTMetadata?contractAddress={nft['contract_address']}&tokenId={nft['token_id']}&refreshCache=false"
            response = requests.get(url, headers=headers)       
            response = response.json()
            nft["file_url"] = response["media"][0]["raw"]
            nft["name"] = response["title"]
        return {'nfts':nftList},201

def approveLoan(transactionAmount, merchantAccount):
    if merchantAccount not in accounts:
        raise ValueError("Invalid Merchant Account Number")
    return transactionAmount <= accounts[PANDA_BANK_ACCOUNT_NUMBER]["Balance"]

def loanTransfer(transactionAmount, merchantAccount):
    if merchantAccount not in accounts:
        raise ValueError("Invalid Merchant Account Number")
    accounts[PANDA_BANK_ACCOUNT_NUMBER]["Balance"] -= transactionAmount
    accounts[merchantAccount]["Balance"] += transactionAmount



class Loan(Resource):
    def post(self):
        args = Loan_get_args.parse_args()
        transactionAmount = args['transactionAmount']
        merchantAccount = args['merchantAccount']
        try:
            loanApproved = approveLoan(transactionAmount, merchantAccount)
            response = {"Approved": loanApproved}
            if loanApproved:
                return response,201
            return response, 422
        except:
            return {"Message": "Invalid Account Number"},404

    def put(self):
        args = Loan_put_args.parse_args()
        transactionAmount = args['transactionAmount']
        merchantAccount = args['merchantAccount']
        try:
            if not approveLoan(transactionAmount, merchantAccount):
                return {"Message": "Loan was not approved"},422
            print("before:", accounts[PANDA_BANK_ACCOUNT_NUMBER])
            print("before:",accounts[merchantAccount])
            loanTransfer(transactionAmount,merchantAccount)
            print("after", accounts[PANDA_BANK_ACCOUNT_NUMBER])
            print("after",accounts[merchantAccount])
            return {"Message": "Loan Amount has been transferred"}, 201
        except:
            return {"Message": "Invalid Account Number"},404


class Account(Resource):
    def get(self,accountNumber):
        if accountNumber not in accounts:
            return {"Message":"Invalid Account Number"},404
        return {"accountNumber": accountNumber} | accounts[accountNumber], 201



def generateMerchantQR(merchantAccountNumber, transactionAmount, merchantName):
    if merchantAccountNumber not in accounts:
        raise ValueError("Invalid Merchant Account Number")

    inputData = merchantAccountNumber + " " + transactionAmount
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5)
    qr.add_data(inputData)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    merchantQR = merchantName + "QR.png"
    img.save(merchantQR)


class QR(Resource):
    def get(self):
        args = QrInformation_get_args.parse_args()
        print(request.form)

    def put(self):
        pass




api.add_resource(Collateral, "/collateral/<string:walletAddress>")
api.add_resource(Exchange, "/exchange")
api.add_resource(Loan, "/loan")
api.add_resource(Account, "/account/<string:accountNumber>")
#api.add_resource(QrInformation,"/transact")

if __name__ == "__main__":
    app.run(debug=True)