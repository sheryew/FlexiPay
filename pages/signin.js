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
      <h3>Web3 Authentication</h3>
      <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
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
      </button>
    </div>
  );
}

export default SignIn;
