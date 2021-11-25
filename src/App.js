//PAGES

import Home from './pages/Home'
import BSCMemepad from './pages/BSCMemepad'

//STYLE

import GlobalStyle from './style/globalStyle'

//COMPONENTS

import Header from './components/header'

//HOOKS

import usePage from './hooks/usePage'
import useWallet from './hooks/useWallet'

//MUI-MATERIAL

import { ThemeProvider, createTheme } from '@mui/material/styles';

//CONNECTORS

import { getLibrary } from './connectors'

//WEB3-REACT

import { Web3ReactProvider } from '@web3-react/core'



function App() {

  const pages = usePage()
  const wallets = useWallet()

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

  console.log(pages.page)

  if(pages.page === 'home'){

    return (<>
      

        <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Header {...pages} {...wallets} />
          <Home {...pages} />
        </Web3ReactProvider>
        </ThemeProvider>


    </>);

}else if(pages.page === 'BSCMemepad'){

    return (<>

    
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
          <Web3ReactProvider getLibrary={getLibrary}>
            <Header {...pages} {...wallets} />
            <BSCMemepad {...pages} {...wallets} />
          </Web3ReactProvider>
        </ThemeProvider>

    </>)
}

}
export default App
