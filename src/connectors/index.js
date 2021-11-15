import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

export function getLibrary() {
    
    return new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"))
  }

  export const injected = new InjectedConnector({
    supportedChainIds: [56],
  })

