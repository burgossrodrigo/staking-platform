//STYLE

import GlobalStyle from '../../style/globalStyle'


//COMPONENTS

import { StyledCard, CardWrapper, StyledBodyText } from '../../components/cardContent'
import BasicTabs from '../../components/tabs'

//MUI-MATERIAL

import { Typography, Divider } from '@mui/material';
import { Grid, Container } from '@mui/material'

//CONNECTORS

import Web3 from 'web3'

//CONTRACTS

import StakeBSCM from '../../contracts/StakeBSCM.json'
import { useEffect, useState } from 'react';



function BSCMemepad() {

  const [stakers, setStakers] = useState()

  useEffect(() => {
  const getTotalStakers = async () => {
    try{  

    const web3 = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/612149607c11b2845c0e0559/bsc/mainnet'))
    const stakebscm = new web3.eth.Contract(StakeBSCM.abi, '0x9ffFF3B55B307E0B4bedbf5FFBf4Ee1B0e16ced0')    
    const TOTAL_STAKERS = await stakebscm.methods.totalStakers().call()
    console.log(TOTAL_STAKERS)
    setStakers(TOTAL_STAKERS)

  } catch (err){

    console.log(err)

  }
}
  getTotalStakers()
}, [])





  return (<>
    
      <GlobalStyle />
        <Container maxWidth='lg'>
        </Container>
        <Grid container>
          <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <CardWrapper>  
                <StyledCard>
                  <Typography variant='h5'>Number os stakers</Typography>
                  <Divider />
                  <StyledBodyText variant='h6'>{stakers}</StyledBodyText>
                </StyledCard>
                <StyledCard>
                <Typography variant='h5'>Total staked</Typography>
                <Divider />
                <StyledBodyText variant='h6'>350000000</StyledBodyText>
                </StyledCard>
                <StyledCard>
                  <Typography variant='h5'>APY</Typography>
                <Divider />
                <StyledBodyText variant='h6'>15% </StyledBodyText>
                </StyledCard>

            </CardWrapper>
            <div>
                <BasicTabs />
            </div>    
            </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            {/* form */}
          </Grid>
      </Grid>


  </>);
}

export default BSCMemepad