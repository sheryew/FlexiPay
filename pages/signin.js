import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { NextResponse, NextRequest } from 'next/server'
import { useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme, Col, Row, Grid, Container, createTheme} from '@nextui-org/react';
import { AcmeLogo } from '../components/AcmeLogo'



function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (wal) => {
    if (isConnected) {
      await disconnectAsync();
    }

    console.log("Connect To Site Via Wallet");

    const userData = { network: "evm" };

    if (wal === "meta") {
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "coin") {
      const { account, chain } = await connectAsync({
        connector: new CoinbaseWalletConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "wal") {
      const { account, chain } = await connectAsync({
        connector: new WalletConnectConnector({ options: { qrcode: true } }),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    console.log("Sending Connected Account and Chain ID to Moralis Auth API");
    console.log(userData)
    const userWallet = userData['address']
    
    function sendProps() {
      Router.push({
        pathname: "/",
        query: {
          userWallet: userWallet
        }
      })
    }

    sendProps();
    push('/')

  };

  return (
    
    <div>
      <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
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
      <Container gap="5">
        <Row>
        <Col>
      <Card css={{ w: "80%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h2 color="white">
          Metamask
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://cdn.dribbble.com/users/75026/screenshots/2160434/media/76746728ea099ef998231271d0eafce5.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Sign in to
          </Text>
          <Text color="#000" size={12}>
            Metamask wallet
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" onClick={() => handleAuth("meta")}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Connect
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card> 
  </Col>

  <Col>
      <Card css={{ w: "80%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h2 color="white">
          Coinbase
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://cdn.shortpixel.ai/spai/q_glossy+w_315+to_auto+ret_img/https://cryptogoodies.shop/wp-content/uploads/2022/02/brand-coinbase-logo.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Sign in to
          </Text>
          <Text color="#000" size={12}>
            Coinbase
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" onClick={() => handleAuth("coin")}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Connect
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card> 
  </Col>

  <Col>
      <Card css={{ w: "80%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h2 color="white">
          Wallet Connect
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://walletconnect.com/images/bitkeep_icon.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Sign in to
          </Text>
          <Text color="#000" size={12}>
            Wallet Connect
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" onClick={() => handleAuth("wal")}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Connect
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card> 
  </Col>
  </Row>
  </Container>

      {/* <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
      <button class="button-34" onClick={() => handleAuth("meta")}>
        Authenticate via Metamask
      </button>
      <br />
      <button class="button-35" onClick={() => handleAuth("coin")}>
        Authenticate via Coinbase
      </button>
      <br/>
      <button class="button-36" onClick={() => handleAuth("wal")}>
        Authenticate via Wallet Connect
      </button> */}
    </div>
  );
}

export default SignIn;
