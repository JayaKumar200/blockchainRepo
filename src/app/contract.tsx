import {ethers} from 'ethers'

declare global{
    interface Window{
        ethereum?:any
    }
}
 export const getWalletAccountBalance = async()=>{
   if(!window.ethereum) throw Error("Plz install the metamask chrome extension and collect it")
    await window.ethereum.request({method:"eth_requestAccounts"})
    const provider = new ethers.BrowserProvider(window.ethereum)
     const signer = await provider.getSigner();
     const walletAddress = await signer.getAddress();
     console.log(walletAddress)
     const accountBalance = await provider.getBalance(walletAddress)
     const format = ethers.formatEther(accountBalance)
     console.log(format)
   return {
    signer,walletAddress,
    accBalance: format
   }
}