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

export default function App() {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
  ];
  const router = useRouter()
  const {
    query: {userWallet, loanFund, merchantAccount}, 
  } = router 
  const props = {userWallet, loanFund, merchantAccount}

  const [data, setData] = useState('');
  const callAPI = async () => {
    const data = await fetch('http://127.0.0.1:5000/account/888-8888-88', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    setData(data);
  }

  useEffect(() =>{
    callAPI()
  }, [])
  console.log(data)
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
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
      <Text
        h1
        size={45}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        PandaBank Transactions
      </Text>
      <Row>
        <Col>
      <Text
        h1
        size={30}
        color="white"
        weight="bold"
      >
        Account Number:
      </Text>
      </Col>
      <Col>
      <Text
        h1
        size={30}
        color="white"
        weight="bold"
      >
        888-8888-88
      </Text>
      </Col>
      </Row>

      <Row>
        <Col>
      <Text
        h1
        size={30}
        color="white"
        weight="bold"
      >
        Account Holder:
      </Text>
      </Col>
      <Col>
      <Text
        h1
        size={30}
        color="white"
        weight="bold"
      >
        PandaBank
      </Text>
      </Col>
      </Row>
    <Table>
      <Table.Header>
        <Table.Column>Sender</Table.Column>
        <Table.Column>Recipient</Table.Column>
        <Table.Column>Transaction Amount(SGD)</Table.Column>
        <Table.Column>Date</Table.Column>
      </Table.Header>
      <Table.Body>
      {data["TransactionHistory"]?.map(user => (
                <Table.Row key="1">
                    <Table.Cell>{user.Sender}</Table.Cell>
                    <Table.Cell>{user.recipient}</Table.Cell>
                    <Table.Cell> {user['Transaction Amount(SGD)']}</Table.Cell>
                    <Table.Cell>{ Date(parseInt(user.Date)) }</Table.Cell>
                    
                    {/* <Table.Cell><Button size="xs" onClick={()=>{
                      repayLoan()
                    }}>Pay</Button></Table.Cell> */}
                    
                </Table.Row>
            ))}
      </Table.Body>
    </Table>
    </div>
  );
}
