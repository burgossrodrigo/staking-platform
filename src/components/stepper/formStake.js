import { useState, useEffect } from 'react'
import { TextField, Box, Slider } from '@mui/material'
import styled from 'styled-components'
import { StyledFormWrapper } from '..'
import { web3, ETH_ADDRESS} from '../../utils/web3'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '@mui/material'

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StakeForm = ({bnbBalance, setBnbBalance}) => {

  const { account } = useWeb3React()
  const [formValue, setformValue] = useState()

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      `
    https://api.bscscan.com/api
   ?module=account
   &action=balance
   &address=${account}&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S
    `
    , {cache: "force-cache"})
        .then(response => response.json())
        .then(fetchData => setBnbBalance(fetchData));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [setBnbBalance]);


/*
    const ethBalance = async () => {

      const eth = new web3.eth.Contract(bnbAbi.result, ETH_ADDRESS )
      const memePAdBalance = await web3.eth.method.balanceOf(account)
      
      return memePAdBalance

    }

*/    

    const ethData = bnbBalance
    console.log(bnbBalance.result)
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
              step={10}
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
            <Typography>{}</Typography>
            <StyledTextField id="outlined-basic" label="BNB" variant="outlined" />
            <DiscreteSlider />
            <StyledTextField id="outlined-basic" label="BSCMEMEPAD" variant="outlined" />
            <DiscreteSlider />
        </StyledFormWrapper>
    </>
    
    )

}

export default StakeForm