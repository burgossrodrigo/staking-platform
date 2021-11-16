import React from 'react'; 
import { useWeb3React } from '@web3-react/core'
import Account from '../account'
import Wallets from '../wallets'
import styled from 'styled-components'
import { Container, AppBar, Button, Modal, Box } from '@mui/material'
import Bg2 from '../../assets/image/bg-2.jpg'

import useWallet from '../../hooks/useWallet'

export default function Header({openWallet, setOpenWallet}) {

    const wallet = useWallet()

  const AccountDiv = styled.div`
 
	position: relative;
	float: right;
 
  `

  const StyledNavbar = styled(AppBar)`
 

	width: 100%
  display: flex;
  flex-direction: row;
  height: 10vh;
  background-image: url(${Bg2});
 
  `

  const StyledButton = styled(Button)`
  

	width: max-content;
	height: 5vh;
  position: relative;
  margin: 2vh;
  margin-left: 85vw;
  `

  const { active, chainId } = useWeb3React()
	
  const handleClose = () => setOpenWallet(false);
  
  console.log(active)
  console.log(chainId)

  //CHANGE ID
const changeId = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x38' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '0x38', rpcUrl: 'https://bsc-dataseed.binance.org/' /* ... */ }],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }

}
  //CHANGE ID

  return (
    <>
    <Container maxWidth='md'>
      <StyledNavbar>
      <AccountDiv>{
      

      
      active ? 
      
      chainId === 56 || chainId === '0x38'
      
      ?

      <Account {...wallet} onClick = {() => {openWallet === true ? setOpenWallet(false) : setOpenWallet(true) }} />
      


      :

      <StyledButton 
      color='error' 
      variant='contained' 
      onClick = {() => {changeId()}}> 
        Connect to BSC
      </StyledButton>   

      : 
      
      <StyledButton 
      color='secondary' 
      variant='contained' 
      onClick = {() => {openWallet === true ? setOpenWallet(false) : setOpenWallet(true) }}> No wallet connected</StyledButton>}
      </AccountDiv>		
      </StyledNavbar>
     </Container>
     <Modal
            open={openWallet}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box>
            <Wallets />
        </Box>
      </Modal> 
    </>
  )
}

