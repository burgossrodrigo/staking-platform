import { useWeb3React } from '@web3-react/core'
import { Button } from '@mui/material'
import styled from 'styled-components'

const Account = ({openWallet, setOpenWallet}) => {

  const StyledButton = styled(Button)`
  

	width: max-content;
	height: 5vh;
	color: FF4530;
  position: relative;
  margin: 2vh;
  margin-left: 88vw;
  `


  const { account } = useWeb3React()

  return (
    <>
      
      <StyledButton variant="contained" color="secondary" onClick = {() => {openWallet === true ? setOpenWallet(false) : setOpenWallet(true) }}>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
    </StyledButton>
    </>
  )
}

export default Account;