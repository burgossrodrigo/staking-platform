import { useWeb3React } from "@web3-react/core"
import { injected } from "../../connectors"
import { Button, Box, Card, CardContent, Icon } from '@mui/material'
import styled from 'styled-components'

function Wallets() {
  const { active, account, activate, deactivate } = useWeb3React()


  const StyledBox = styled(Box)`
  
    width: 40%;
    height: maxt-content;
    margin-top: 20vh;
    margin-left: 30vw;
  `

  const StyledIcon = styled.img`
  
    display: flex;
    height: inherit;
    width: inherit;
  
  `

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }



  return (
    <StyledBox>
      <Card>
        <CardContent>
            {active 
            
            ? 
            
            <span>Connected with <b>{account.substring(0, 6)}...{account.substring(account.length - 4)}</b></span>
            
            :

            'No wallet connected :(' 
        
            }
        </CardContent>  
        <CardContent>

        <Button 
        onClick={connect}
        color='secondary'
        variant='contained'
        startIcon={            <Icon>
				  <StyledIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png"/>
				</Icon>  }
        >Connect to MetaMask
        </Button>


        </CardContent>  
        <CardContent>
            {active 
            
            ? 
            
            <Button onClick={disconnect}
            color='secondary'
            variant='contained'
            startIcon={            <Icon>
                      <StyledIcon src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png"/>
                    </Icon>  }
           >Disconnect</Button>
            
            : 
            
            <Button onClick={disconnect}
            color='secondary'
            variant='contained'
            startIcon={            <Icon>
                      <StyledIcon src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png"/>
                    </Icon>  }
           >Disconnect</Button>
            
            }


        </CardContent>
      </Card>  

    </StyledBox>
  )
}

export default Wallets;

