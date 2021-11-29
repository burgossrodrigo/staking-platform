import { TextField, Button, Card,
  CardActions , CardContent, Typography,
  Grid } from '@mui/material'
import styled from 'styled-components'
import { StyledFormWrapper } from '..'
import StakeBSCM from '../../contracts/StakeBSCM.json'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core' 

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StyledCardForm = styled(Card)`

  width: 30vw;
  margin-left: 2vw;
  margin-top: 12vh;


`

const StyledCardFormAction = styled(CardActions)`

  


`

const StyledCardFormContent = styled(CardContent)`

  


`

const StakeForm = ({bnbBalance, memepadBalance, input, output, setOutput}) => {




/*
    const ethBalance = async () => {

      const eth = new web3.eth.Contract(bnbAbi.result, ETH_ADDRESS )
      const memePAdBalance = await web3.eth.method.balanceOf(account)
      
      return memePAdBalance

    }

*/

console.log(input, output)

const { account } = useWeb3React()

console.log(account)

  const setStake = async () => {
    try{  

     
    const web3 = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/612149607c11b2845c0e0559/bsc/mainnet'))
    const stakebscm = new web3.eth.Contract(StakeBSCM.abi, '0x9ffFF3B55B307E0B4bedbf5FFBf4Ee1B0e16ced0')
    const stakingValue = web3.utils.toWei(output)
    await stakebscm.methods.stake(stakingValue).send({from: account})
    .then(function(receipt){console.log(receipt)})

    

  } catch (err){

    console.log(err)

  }
}



    return(
    
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <StyledFormWrapper>
            <Typography variant="b1" color="secondary">Max: {memepadBalance}</Typography>           
            <StyledTextField id="outlined-basic" onChange={e => setOutput(e.target.value)} label={output === null ? "BNB" : output} variant="outlined" />
            <Button>Stake</Button>
        </StyledFormWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <StyledCardForm>
            <StyledCardFormContent>
              <Typography variant="b1">Stake the amount of Memepad {output}</Typography><br />
            </StyledCardFormContent>
            <StyledCardFormAction>
              <Button variant="outlined" onClick={() => { setStake() }}>Stake</Button>
            </StyledCardFormAction>
          </StyledCardForm>
        </Grid>

      </Grid>
    </>
    
    )

}

export default StakeForm