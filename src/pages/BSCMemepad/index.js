//STYLE

import GlobalStyle from '../../style/globalStyle'


//COMPONENTS

import { StyledCard, CardWrapper, StyledBodyText } from '../../components/cardContent'
import BasicTabs from '../../components/tabs'

//MUI-MATERIAL

import { Typography, Divider } from '@mui/material';
import { Grid, Container } from '@mui/material'

//CONNECTORS


//WEB3-REACT



function BSCMemepad() {

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
                  <StyledBodyText variant='h6'>1000</StyledBodyText>
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