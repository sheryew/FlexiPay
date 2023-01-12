import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const {
    query: {userWallet}, 
  } = router 

  const props = {userWallet} 
  console.log(props.userWallet)
  const axios = require('axios');

  const res = fetch('http://127.0.0.1:5000/collateral/0xf396b0385faC34992E96263256B1ffC02d21b5fc').then(response => {
        console.log(response); // Logs the response
        return {
          response
        };
    });
  console.log(res)
  
  // fetch('http://127.0.0.1:5000/collateral/0xf396b0385faC34992E96263256B1ffC02d21b5fc')
  //   .then(results => results.json())
  //   .then(console.log)
  return (
    <div>
      <h1>fk</h1>
    </div>
  )
}
