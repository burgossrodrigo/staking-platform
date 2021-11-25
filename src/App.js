
import Home from './pages/Home'
import BSCMemepad from './pages/BSCMemepad'
import usePage from './hooks/usePage'

//STYLE

import GlobalStyle from './style/globalStyle'


//COMPONENTS


//HOOKS


//MUI-MATERIAL

import { ThemeProvider, createTheme } from '@mui/material/styles';
//CONNECTORS

import { getLibrary } from './connectors'

//WEB3-REACT

import { Web3ReactProvider } from '@web3-react/core'



function App() {

  const pages = usePage()

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#325AFF'
      },
      secondary:{
        main: '#F9D842'
      },
      contrast:{
        main: '#000000'
      }
    },
    typography: {
      fontFamily: [
        "Inter-var", 
        "sans-serif"
      ].join(','),
    },
  });

  console.log(pages)

  return (<>
    

      <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
        {pages.page === 'home' ? <Home {...pages} /> : <BSCMemepad {...pages} /> }    
      </Web3ReactProvider>
      </ThemeProvider>


  </>);
}

export default App
