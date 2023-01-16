import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { useEffect, useState, React } from 'react'
import {ethers} from "ethers"
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme, Col, Row, Grid, Container, Avatar, createTheme, Tooltip, Input, useInput} from '@nextui-org/react';
import { Table } from '@nextui-org/react';
import { AcmeLogo } from '../components/AcmeLogo'
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import { SendButton } from "./SendButton";
import { SendIcon } from "./SendIcon";
import { QrReader } from 'react-qr-reader';
import Router from "next/router";
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
   
  
  async function setSafeApproval(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate) {
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
      initialise(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate);
    }

    await isTransactionMined(transactionHash);
  }

  async function initialise(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate) {

    const response = await fetch("http://127.0.0.1:5000/loan", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"transactionAmount": Amount, "merchantAccount": "652-3342-22"})
    })
    if (response.status == 201) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
  
      const Contract = new ethers.Contract(ContractAddress, ContractABI, signer);
  
      const loanid = await Contract.createLoan(NFTContract, NFTToken, Amount, UnixTimeStamp, InterestRate);

      fetch("http://127.0.0.1:5000/loan", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"transactionAmount": Amount, "merchantAccount": "652-3342-22"})
      })
      
    } else {
      console.log("Error spotted")
    }
  }
  function sendProps2(remainingLoan) {
    Router.push({
      pathname: "/",
      query: {
        userWallet: props.userWallet,
        loanFund: remainingLoan
      }
    })
  }


  async function repayLoan(loanID, amountInEth) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const Contract = new ethers.Contract(ContractAddress, ContractABI, signer);
    await Contract.repayLoan(loanID, {value: ethers.utils.parseEther(String(amountInEth))})
    var info 
    Contract.on("LoanRepayed", (id, remainingBalance) => {
      info = {
        id: id,
        remainingBalance: remainingBalance
      };
      return JSON.stringify(info, null, 2);
    })
    Contract.on("LoanRepayed", () => {
      fetch("http://127.0.0.1:5000/loanInfo", {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "loanID": String(parseInt(info.id['_hex'], 16)), "balance": String((parseInt(info.remainingBalance['_hex'], 16))/ Math.pow(10, 18))})
      })
      
      
    })
    Contract.on("LoanRepayed", () =>  {
      sendProps2(String((parseInt(info.remainingBalance['_hex'], 16))/ Math.pow(10, 18)))}
      )

  }

  function getvalue() {
    console.log(event.target.value);
  }

  const router = useRouter()
  const {
    query: {userWallet}, 
  } = router 

  
  

  const props = {userWallet} 
  console.log(props.userWallet)
  const axios = require('axios');
  const [data, setData] = useState('');
  const callAPI = async () => {
    const data = await fetch('http://127.0.0.1:5000/loanInfo', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"walletAddress": props.userWallet})
    }).then(res => res.json())
    setData(data);
    console.log(data['loans'])
  }

  useEffect(() =>{
    callAPI()
  }, [])
  console.log(data)
  var date = new Date()
  date.setDate(date.getDate() + 30)


  
  const { push } = useRouter();

  date = String(Math.round(date/1000))
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
  const { value, reset, bindings } = useInput("");
  const [qrData, setQrData] = useState('No result');
  console.log('wallet address display')
  console.log(userWallet)
  function unixToDate(seq){
    var date = new Date(parseInt(seq) * 1000)
    date = String(date)
    return date.split(' ').slice(0, 5).join(' ')
    
  }
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
          <Navbar.Link isActive href="/">Home</Navbar.Link>
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

      {/* {data['nfts']?.map(user => (
                <div key={user.name}>
                    <h1>{user.name}</h1>
                    <img src= {"https://ipfs.io/ipfs/" + user.file_url.slice(7)} alt='me' width='200' height='200'/>
                    <button className='button-37' onClick={()=>{
                      setSafeApproval(user.contract_address, user.token_id, "20", date, "105")
                    }}>Select</button>
                </div>
            ))} */}
    <Container gap={0}>
    <Row gap={3}>
    <Col>
    <Card css={{ mw: "690px"}}>
          <Card.Header>
            <Text b>Pay Loans</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Loan ID</Table.Column>
        <Table.Column>Loan Amount</Table.Column>
        <Table.Column>Expiry</Table.Column>
        <Table.Column>Action</Table.Column>
      </Table.Header>
      <Table.Body>
      {data["loans"]?.map(user => (
                <Table.Row key="1">
                    <Table.Cell>{user.loanID}</Table.Cell>
                    <Table.Cell>{user.balance.slice(0, 5)}</Table.Cell>
                    <Table.Cell>{unixToDate(user.loanExpiry)}</Table.Cell>
                    <Table.Cell> 
                    <Tooltip content={"Enter amount you wish to pay"} rounded color="primary">
                      <Input 
                        {...bindings}
                          width="120px"
                          clearable
                          contentRightStyling={false}
                          placeholder="Type your message..."
                          status="primary"
                          contentRight={
                          <SendButton onClick={()=>{
                            repayLoan(user.loanID, value)
                          }}>
                          <SendIcon/>
                          </SendButton>
                        }
                      />
                      </Tooltip>
                    </Table.Cell>
                    {/* <Table.Cell><Button size="xs" onClick={()=>{
                      repayLoan()
                    }}>Pay</Button></Table.Cell> */}
                    
                </Table.Row>
            ))}
        
      </Table.Body>
    </Table>
          </Card.Body>
          <Card.Footer>
            <Row justify="flex-end">
              {/* <Button size="sm" as={Link}  onClick={()=>{
                      
                    }}>Refresh</Button> */}
            </Row>
          </Card.Footer>
        </Card>
        </Col>
      <Col>
    <Card css={{ mw: "450px"}}>
          <Card.Header>
            <Text b>Initiate Loan</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setQrData(result?.text);
                    }


              if (!!error) {
                        // console.info(error);
                    }
                }}
                style={{ width: '100%' }}
          />
                <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        Merchant ID:
      </Text>
          <Text>{qrData}</Text> *
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm" as={Link}  onClick={()=>{
                      function sendProps() {
                        console.log(qrData)
                        const qrArray = qrData.split(" ")
                        console.log(qrData)
                        Router.push({
                          pathname: "/nftLibrary",
                          query: {
                            userWallet: props.userWallet,
                            loanFund: qrArray[1],
                            merchantAccount: qrArray[0]
                          }
                        })
                      }
                      sendProps()
                    }}>Agree</Button>
            </Row>
          </Card.Footer>
        </Card>
        </Col>
        </Row>
  </Container>

  
  
  
  
    </div>
  )
}