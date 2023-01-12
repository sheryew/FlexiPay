import requests

BASE = "http://127.0.0.1:5000/"

response = requests.get(BASE + "loan",{"transactionAmount": 300, "merchantAccount":"652-3342-22"})
print(response.json())

response = requests.get(BASE + "loan",{"transactionAmount": 300, "merchantAccount":"9"})
print(response.json())

response = requests.get(BASE + "loan",{"transactionAmount": 99999999999999999999, "merchantAccount":"652-3342-22"})
print(response.json())

response = requests.get(BASE + "account/888-8888-88")
print(response.json())

response = requests.get(BASE + "account/652-3342-22")
print(response.json())

response = requests.put(BASE + "loan",{"transactionAmount": 300, "merchantAccount":"652-3342-22"})
print(response.json())

response = requests.put(BASE + "loan",{"transactionAmount": 300, "merchantAccount":"652-3342-21"})
print(response.json())


response = requests.put(BASE + "loan",{"transactionAmount": 999999999999999999999, "merchantAccount":"652-3342-22"})
print(response.json())

response = requests.get(BASE + "account/888-8888-88")
print(response.json())

response = requests.get(BASE + "account/652-3342-22")
print(response.json())

response = requests.get(BASE + "account/652-3342-21")
print(response.json())

