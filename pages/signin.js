import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import axios from "axios";


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
    


    console.log(userData['address'])

    const spawner = require('child_process').spawn;
    const py_payload = userData['address'];
    const python_process = spawner('python', ["../src/qrScanner.py", py_payload])
    python_process.stdout.on('data', (data) => {
      console.log('Data received from python script ', data.toString())
    })

  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth("meta")}>
        Authenticate via Metamask
      </button>
      <br />
      <button onClick={() => handleAuth("coin")}>
        Authenticate via Coinbase
      </button>
      <br/>
      <button onClick={() => handleAuth("wal")}>
        Authenticate via Wallet Connect
      </button>
    </div>
  );
}

export default SignIn;
