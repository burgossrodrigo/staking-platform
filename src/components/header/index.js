import React from 'react'; 
import { useWeb3React } from '@web3-react/core'
import Account from '../account'
import Wallets from '../wallets'
import styled from 'styled-components'
import { Container, AppBar, Button, 
        Modal, Box, Breadcrumbs,
        Link } from '@mui/material'
import useWallet from '../../hooks/useWallet'

export default function Header({openWallet, setOpenWallet, page, setPage}) {

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
 
  `

  const StyledButton = styled(Button)`
  

	width: max-content;
	height: 5vh;
  position: relative;
  margin: 2vh;
  margin-left: 45vw;
  `

  const StyledBreadcrumbs = styled(Breadcrumbs)`
  
  width: 35vw;
  font-size: 1.8rem;
  color: white;
  margin-left: 2vw;
  margin-top: 1vh;
  
  `

  const StyledLink = styled(Link)`
  
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
  
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
       <StyledBreadcrumbs separator=' ' color="primary">
       <StyledLink color="secondary" underline="none" onClick={() => setPage('Home')}>
        Home
       </StyledLink>
       <StyledLink color="secondary" underline="none" onClick={() => setPage('BSCMemepad')}>
        BSCMemepad
       </StyledLink>
       </StyledBreadcrumbs>
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

