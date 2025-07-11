'use client'
import React, { use, useState } from 'react'
import {ethers} from 'ethers'
import { getWalletAccountBalance } from './contract'
const page = () => {

  const[address,setAddress] = useState<string>()
  const [balance, setBalance] = useState<string>(); 
const [isAvailable,setIsAvailable] = useState<boolean>()
  const handleBalance = async()=>{
    try{
     const connect = await getWalletAccountBalance();
     if(!connect.signer){
      console.log("plz create the wallet Account in metamask")
      alert("plz create the wallet Account in metamask!")
     } 
      const bln = await connect.accBalance
      setBalance(bln)
      const walletads = await connect.walletAddress
      setAddress(walletads)
      setIsAvailable(true)
    }catch(err:any){
      console.log("your walletConnection error:", err)
      alert('your walletConnect is error:')
    }
    
  }

  return (
   <main>
  <h1>walletConnection</h1>

  {isAvailable ? (
    <>
    <p>Wallet is connected</p> <br/>
     <h1>WalletAccountBalace :</h1><span>{balance}</span> <br/>
     <h1>WalletAddress:</h1> <span>{address}</span>
      </>
  ) : (
    
    <>
      <button onClick={handleBalance}>Tap to Connect Your Address</button>
     
    </>
  )}
</main>

  )
}

export default page