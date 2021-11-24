import { useState } from 'react'
import { TextField, Box, Slider } from '@mui/material'
import styled from 'styled-components'
import { StyledFormWrapper } from '..'
import { web3 } from '../../utils/web3'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '@mui/material'

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StakeForm = ({bnbBalance, setBnbBalance}) => {

  const { account, active } = useWeb3React()
  const [formValue, setformValue] = useState()

  const balanceOfBnB = async () => { 
    if(active){
    await web3.eth.getBalance(account) 
    .then(response => setBnbBalance(response))
    .then(console.log(bnbBalance))
  }
  }

  balanceOfBnB()


/*
    const ethBalance = async () => {

      const eth = new web3.eth.Contract(bnbAbi.result, ETH_ADDRESS )
      const memePAdBalance = await web3.eth.method.balanceOf(account)
      
      return memePAdBalance

    }

*/    

    const ethData = bnbBalance
    function valuetext() {
        return `${ethData}%`;
      }

      const handleChange = (e) => {

        setformValue(e.target.value);

      }
      
    function DiscreteSlider() {
        return (
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="TOkens"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={0}
              max={100}
            />
          </Box>
        );
      }

    return(
    
    <>
        <StyledFormWrapper>
            <Typography>Max: {bnbBalance}</Typography>
            <StyledTextField id="outlined-basic" onChange={handleChange} label={formValue === null ? "BNB" : formValue} variant="outlined" />
            <DiscreteSlider />
            <Typography>Max: {bnbBalance}</Typography>            
            <StyledTextField id="outlined-basic" label="BSCMEMEPAD" variant="outlined" />
            <DiscreteSlider />
        </StyledFormWrapper>
    </>
    
    )

}

export default StakeForm