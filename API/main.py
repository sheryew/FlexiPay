from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import requests
from flask_cors import CORS
from pycoingecko import CoinGeckoAPI
import time
cg = CoinGeckoAPI(api_key='CG-UoUVUe9cGfc7tWvJaUp5RcAJ')

app = Flask(__name__)
api = Api(app)
CORS(app)

LoanInfo_post_args = reqparse.RequestParser()
LoanInfo_post_args.add_argument("walletAddress", type=str,help="Wallet Address is required", required=True)

LoanInfo_put_args = reqparse.RequestParser()
LoanInfo_put_args.add_argument("walletAddress", type=str,help="Wallet Address is required", required=True)
LoanInfo_put_args.add_argument("loanID", type=str,help="Loan ID is required", required=True)
LoanInfo_put_args.add_argument("balance", type=str,help="Balance is required", required=True)
LoanInfo_put_args.add_argument("loanExpiry", type=int,help="Loan Expiry is required", required=True)

LoanInfo_patch_args = reqparse.RequestParser()
LoanInfo_patch_args.add_argument("loanID", type=str,help="Loan ID is required", required=True)
LoanInfo_patch_args.add_argument("balance", type=str,help="Balance is required", required=True)

collateral_post_args = reqparse.RequestParser()
collateral_post_args.add_argument("transactionAmount", type=float, help="transactionAmount in SGD is required", required=True)
collateral_post_args.add_argument("symbol", type=str, help="Symbol of NFT collateral is required", required=True)


exchange_post_args = reqparse.RequestParser()
exchange_post_args.add_argument("sgd", type=float, help="amount of sgd is required", required=True)

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

approvedCollections = {"doodle": "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e"}

loans = {"0x123":[{"loanID":0, "balance": 100, "loanExpiry": 123}],"0x456":[{"loanID":1, "balance": 200, "loanExpiry": (time.time_ns() + 999999999999999)}],"0x789":[{"loanID":2, "balance": 0,"loanExpiry": (time.time_ns() + 9999999999999999)}],"0x60137a39d798FC9824fe17115090502A0a1677e6":[{"loanID":1, "balance": 200, "loanExpiry": (time.time_ns() + 999999999999999)}]}

def convertETHtoSGD(ETH):
    response = cg.get_price(ids='ethereum', vs_currencies='sgd')
    conversionETHtoSGD =  response['ethereum']['sgd']
    return ETH * conversionETHtoSGD

def convertSGDtoETH(SGD):
    response = cg.get_price(ids='ethereum', vs_currencies='sgd')
    conversionETHtoSGD =  response['ethereum']['sgd']
    return (SGD / conversionETHtoSGD)

class Exchange(Resource):
    def post(self):
        args = exchange_post_args.parse_args()
        response = cg.get_price(ids='ethereum', vs_currencies='sgd')
        conversionETHtoSGD =  response['ethereum']['sgd']
        transactionAmountETH = convertSGDtoETH(args['sgd'])
        return {'ETH': transactionAmountETH}, 201
   

class Collateral(Resource):

    def post(self, walletAddress):
        headers = {
            "accept": "application/json",
            "Authorization": "c25da947-4699-47cb-b783-43d795249e67"
        }
        args = collateral_post_args.parse_args()
        symbol = args['symbol'].lower()
        if symbol not in approvedCollections:
            return {"result": "failed"}, 402
        collectionID = approvedCollections[symbol]
        url = "https://api.nftport.xyz/v0/transactions/stats/" + collectionID + "?chain=ethereum"
        response = requests.get(url, headers=headers)
        response = response.json()
        floorPriceETH = response['statistics']['floor_price']
        floorPriceSGD = convertETHtoSGD(floorPriceETH) 
        print(floorPriceSGD)
        print(args['transactionAmount'])
        if floorPriceSGD >= args['transactionAmount']:
            return {"result": "success"}, 201
        else:
            return {"result": "failed"}, 404

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
            nft["symbol"] = response['contractMetadata']['symbol']
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
def createLoanRecord(walletAddress, loanID, remainingBalance, loanExpiry):
    loanRecord = {"loanID": loanID, "balance":remainingBalance, "loanExpiry": loanExpiry}
    if walletAddress in loans:
        loans[walletAddress].append(loanRecord)
    else:
        loans[walletAddress] = [loanRecord]


def modifyLoanRecord(loanID, remainingBalance):  
    for loanRecords in loans.values():   
        for loan in loanRecords:          
            if loan["loanID"] == loanID:
                loan["balance"] = remainingBalance
                return

def updateLoanRecords():
    for wallet, loanRecords in loans.items():   
        for i in range(len(loanRecords) -1, -1, -1):
            if float(loanRecords[i]['balance']) <= 0 or loanRecords[i]["loanExpiry"] <= time.time_ns():
                del loanRecords[i]



class LoanInfo(Resource):
    def post(self):
        result = {}
        print("correct")
        args = LoanInfo_post_args.parse_args()
        walletAddress = args["walletAddress"]
        if walletAddress not in loans.keys():
            return {"loans": []},403
        updateLoanRecords()
        print(loans)
        return {"loans": loans[walletAddress]},201
        


    def put(self):
        args = LoanInfo_put_args.parse_args()
        print("hi")
        walletAddress = args["walletAddress"]
        loanID = args["loanID"]
        balance = args["balance"]
        loanExpiry = args["loanExpiry"]
        createLoanRecord(walletAddress,loanID,balance,loanExpiry)
        print(loans)
        return {}, 201

    def patch(self):
        args = LoanInfo_patch_args.parse_args()
        loanID = args['loanID']
        balance = args['balance']
        modifyLoanRecord(loanID, balance)
        return {},201

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
api.add_resource(LoanInfo, "/loanInfo")
#api.add_resource(QrInformation,"/transact")

if __name__ == "__main__":
    app.run(debug=True)