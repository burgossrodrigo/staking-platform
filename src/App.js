//STYLE

import GlobalStyle from './style/globalStyle'


//COMPONENTS

import Header from './components/header'
import useWallet from './hooks/useWallet'
import { StyledCard, CardWrapper, StyledBodyText } from './components/cardContent'
import BasicTabs from './components/tabs'


//HOOKS


//MUI-MATERIAL

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
import { Grid, Container } from '@mui/material'

//CONNECTORS

import { getLibrary } from './connectors'

//WEB3-REACT

import { Web3ReactProvider } from '@web3-react/core'



function App() {

  const wallet = useWallet()

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#325AFF'
      },
      secondary:{
        main: '#F9D842'
      }
    },
    typography: {
      fontFamily: [
        "Inter-var", 
        "sans-serif"
      ].join(','),
    },
  });

  return (<>
    

      <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Container maxWidth='lg'>
          <Header {...wallet} />
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
                {/* STAKE YOUR BSC MEMEPAD HERE */}
                {/* CHECKPOINTS */}
            </div>
            <div>
                <BasicTabs />
            </div>    
            </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            {/* form */}
          </Grid>
      </Grid>
      </Web3ReactProvider>
      </ThemeProvider>


  </>);
}

export default App
