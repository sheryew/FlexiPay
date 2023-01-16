import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import Router from "next/router";
import { useEffect, useState, React } from 'react'
import {ethers} from "ethers"
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme, Col, Row, Grid, Container} from '@nextui-org/react';
import { AcmeLogo } from '../components/AcmeLogo'
export default function Home() {

  var ContractAddress = "0x5a7ff8de83F250037E51C1E21C61133eDb9Fd866";
  var ContractABI = [
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "_tokenAddress",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "_tokenid",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "_loanAmount",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "_loanCompleteTime",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "_interestRate",
       "type": "uint256"
      }
     ],
     "name": "createLoan",
     "outputs": [
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "id",
       "type": "uint256"
      },
      {
       "indexed": true,
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "indexed": false,
       "internalType": "address",
       "name": "tokenAddress",
       "type": "address"
      },
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      },
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "loanAmount",
       "type": "uint256"
      },
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "loanCompleteTime",
       "type": "uint256"
      }
     ],
     "name": "LoanCreated",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "id",
       "type": "uint256"
      }
     ],
     "name": "LoanDrawn",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "id",
       "type": "uint256"
      },
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "remainingBalance",
       "type": "uint256"
      }
     ],
     "name": "LoanRepayed",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "id",
       "type": "uint256"
      },
      {
       "indexed": false,
       "internalType": "address",
       "name": "lender",
       "type": "address"
      }
     ],
     "name": "LoanUnderwritten",
     "type": "event"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "_loanId",
       "type": "uint256"
      }
     ],
     "name": "repayLoan",
     "outputs": [],
     "stateMutability": "payable",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "seizeNFT",
     "outputs": [],
     "stateMutability": "payable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "_loanId",
       "type": "uint256"
      }
     ],
     "name": "underwriteLoan",
     "outputs": [],
     "stateMutability": "payable",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "get",
     "outputs": [
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "name": "nftLoans",
     "outputs": [
      {
       "internalType": "address",
       "name": "tokenAddress",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "tokenOwner",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "lender",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "loanAmount",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "loanCompleteTime",
       "type": "uint256"
      },
      {
       "internalType": "uint256",
       "name": "loanAmtWithInterest",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "numLoans",
     "outputs": [
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    }
   ]
   
   

  async function setSafeApproval(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate, symbol, loanFund) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const NFTABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getmintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const tx = new ethers.Contract(NFTContract, NFTABI, signer)
    var response = await tx.setApprovalForAll(ContractAddress, true);
    var transactionHash = response["hash"];
    const isTransactionMined = async(transactionHash) => {
      var txReceipt = await provider.getTransactionReceipt(transactionHash);
      while (txReceipt == null) {
        txReceipt = await provider.getTransactionReceipt(transactionHash);
        console.log('I am waiting!');
      }
      initialise(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate, symbol, loanFund);
    }

    await isTransactionMined(transactionHash);
  }

  async function initialise(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate, symbol, loanFund) {

    const response = await fetch("http://127.0.0.1:5000/loan", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"transactionAmount": loanFund, "merchantAccount": merchantAccount})
    })
    const response2 = await fetch("http://127.0.0.1:5000/collateral/123" , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"symbol": symbol, "transactionAmount": loanFund})
      })
      const response3 = await fetch('http://127.0.0.1:5000/exchange', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"sgd": Amount})
      }).then(res => res.json())
      console.log(response3)
    if (response.status == 201 && response2.status == 201) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
  
      const Contract = new ethers.Contract(ContractAddress, ContractABI, signer);
      var info;

      const loanid = await Contract.createLoan(NFTContract, NFTToken, String(Math.ceil(response3['ETH'] * 10) ), UnixTimeStamp, InterestRate);
      Contract.on("LoanCreated", (id, owner, tokenAddress, tokenId, loanAmount, loanCompleteTime) => {
        info = {
            id: id,
            owner: owner,
            tokenAddress: tokenAddress,
            tokenId: tokenId,
            loanAmount: loanAmount,
            loanCompleteTime: loanCompleteTime
        }
      })
    
      Contract.on("LoanCreated", () => {
        console.log(info.owner, String(parseInt(info.id['_hex'],16)), String(parseInt(info.loanAmount['_hex'], 16)), parseInt(info.loanCompleteTime['_hex'], 16))
        fetch("http://127.0.0.1:5000/loanInfo", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"walletAddress": String(info.owner), "loanID": String(parseInt(info.id['_hex'], 16)), "balance": String((parseInt(info.loanAmount['_hex'], 16))/ 10), "loanExpiry": parseInt(info.loanCompleteTime['_hex'], 16)})
        })})
        Contract.on("LoanCreated", () => {
            fetch("http://127.0.0.1:5000/loan", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"transactionAmount": loanFund, "merchantAccount": merchantAccount})
      })})
    } else {
        console.log("Something went wrong!")
    }
  }
  const router = useRouter()
  const {
    query: {userWallet, loanFund, merchantAccount}, 
  } = router 
  
  function sendProps() {
    Router.push({
      pathname: "/",
      query: {
        userWallet: props.userWallet,
        loanFund: 1000
      }
    })
  }

  function merchantPage() {
    console.log("merchant page here")
    console.log(props.merchantAccount)
    Router.push({
      pathname: "/merchantPage",
      query: {
        userWallet: props.userWallet,
        merchantAccount: props.merchantAccount
      }
    })
  }

  const props = {userWallet, loanFund, merchantAccount} 
  console.log(props.userWallet)
  console.log(props.loanFund)
  const axios = require('axios');
  const [data, setData] = useState('');
  const callAPI = async () => {
    const data = await fetch('http://127.0.0.1:5000/collateral/' + props.userWallet).then(res => res.json())
    setData(data);
  }

  useEffect(() =>{
    callAPI()
  }, [])
  console.log(data['nfts'])
  var date = new Date()
  
  date = String(Math.round(Date.now()/1000) + (10 * 60))
    const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("primary");

  const {isDark} = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];
  var data2
    
    const callAPI2 = async () => {
       data2 = await fetch('http://127.0.0.1:5000/exchange', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"sgd": props.loanFund})
      }).then(res => res.json())
    }
  
    

  
  console.log(data2)
 
  return (
    <div>

      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
            <AcmeLogo />
            <Text b color="inherit" hideIn="l" h3>
              FlexiPay
            </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link onClick={()=>{
                      sendProps()
                    }}>Home</Navbar.Link>
          <Navbar.Link onClick={()=>{
            merchantPage()
          }}>Merchant</Navbar.Link>

          <Navbar.Link color="inherit" href="/bankPage">
            PandaBank
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="/signin">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="/signin">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Spacer y={1} />
      <Container gap="5">
        <Row>
      {data['nfts']?.map(user => (
        <Col gap="5">
                    {/* <h1>{user.name}</h1>
                    <img src= {"https://ipfs.io/ipfs/" + user.file_url.slice(7)} alt='me' width='200' height='200'/>
                    <button className='button-37' onClick={()=>{
                      setSafeApproval(user.contract_address, user.token_id, "20", date, "105")
                    }}>Select</button> */}
                    <Card css={{ mw: "230px" }}>
                      <Card.Header> 
                      <Text b>{user.name}</Text>
                      </Card.Header>
                      <Card.Body css={{ py: "$10" }}>
                      <img src= {"https://ipfs.io/ipfs/" + user.file_url.slice(7)} alt='me' width='200' height='200'/>
                      <Spacer y={0.5} />
                      <Row>
                      <Col>
                      <Text>Max Loan: </Text>
                      </Col>
                      <Col>
                      <Text color="success">{user.value}</Text>
                      </Col>
                      

                      </Row>
                      </Card.Body>
                      <Card.Footer>
                      <Row justify="flex-end">
                      <Button size="sm" onClick={()=>{
                        console.log(props.loanFund)
                      setSafeApproval(user.contract_address, user.token_id, props.loanFund, date, "105", user.symbol, props.loanFund)
                    }}>Agree</Button>
                      </Row>
                      </Card.Footer>
                    </Card>
                    
                </Col>
            ))}
            </Row>
            </Container>
        </div>
  )
}
