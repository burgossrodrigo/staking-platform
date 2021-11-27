import Web3 from 'web3'


export const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc.getblock.io/mainnet/?api_key=0edbc7d4-4b09-4a42-b8e7-2126446d9fe2'));

export async function networkId(){

    const id = await web3.eth.net.getId
    
    return id

}

export const ETH_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
export const MEME_ADDRESS = '0x9ffFF3B55B307E0B4bedbf5FFBf4Ee1B0e16ced0'
export const MEMEPOOL_ADDRESS  = ''
export const MEMEFACTORY_ADDRESS = ''
export const IDO_ADDRESS = ''