import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

export function getLibrary() {
    
    return new Web3(new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/612149607c11b2845c0e0559/bsc/mainnet"))
  }

  export const injected = new InjectedConnector({
    supportedChainIds: [56],
  })

