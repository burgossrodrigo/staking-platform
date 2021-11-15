import { Grid, Container } from '@mui/material'
import Header from './components/header'
import useWallet from './hooks/useWallet'

//HOOKS


//MUI-MATERIAL

import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <Web3ReactProvider getLibrary={getLibrary}>
        <Container maxWidth='lg'>
          <Header {...wallet} />
        </Container>
        <Grid container>
          <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <div>  
                {/* STAKE WITHDRAW UNSTAKE */}
                {/* NUMBER OF STAKERS */}
                {/* TOTAL BSC MEMEPAD STAKED */}
                {/* APY */}
            </div>
            <div>    
                {/* STAKE YOUR BSC MEMEPAD HERE */}
                {/* CHECKPOINTS */}
            </div>
            <div>
                {/*THE CHECKPOINTS*/}
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
