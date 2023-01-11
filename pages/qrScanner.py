import json
import cv2
import pyzbar.pyzbar as pyzbar
from moralis import evm_api
import requests
import time
import qrcode
import sys 

BASE = "http://127.0.0.1:5000/"

def generateMerchantQR(merchantWallet, transactionAmount, merchantName):
    inputData = merchantWallet + " " + transactionAmount
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5)
    qr.add_data(inputData)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    merchantQR = merchantName + "QR.png"
    img.save(merchantQR)

def readQR(frame):
    decodedFrame = pyzbar.decode(frame)
    transactions = []
    for qr in decodedFrame:
        transactions.append(qr.data.split())
    encoding = 'utf-8'
    finalTransaction = []
    #to handle cases by which there are multiple QR codes in one image
    for transaction in transactions:
        merchantWallet = transaction[0].decode(encoding)
        transactionAmount = transaction[1].decode(encoding)
        finalTransaction =  [merchantWallet, transactionAmount]
    return finalTransaction






#generateMerchantQR("0x123456789","12", "Macdonalds")        
#meta mask authentication
#hardcore user wallet for now
cam = cv2.VideoCapture(-1)
cam.set(5,640)
cam.set(6,480)

transactions = []

while True:
    _,frame = cam.read()
    cv2.imshow("QR_Code_Scanner", frame) 
    transactions = readQR(frame)
    if len(transactions) != 0:
        break
     
    key = cv2.waitKey(1)
    if key == 27:
        print("exit success")
        break

print(transactions)
response = requests.get(BASE+ "/transact", {"bankAccountNumber": transactions[0],"transactionAmount": transactions[1]})

#send {user wallet, merchant wallet and amount -> SGD} -> call the api
#handle display of nft, values etc and input
#get input  
#send to api info