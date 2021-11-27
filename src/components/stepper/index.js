import React from 'react';
import StakeForm from './formStake'
import { Divider, Typography, 
        Button, StepLabel, Step, 
        Stepper, Box  } from '@mui/material'
import useBnbBalance from '../../hooks/useBnbBalance'
import useMemepadBalance from '../../hooks/useMemepadBalance'
import { useWeb3React } from '@web3-react/core'
//import BNB from '../../contracts/BNB.json'
import { web3 } from '../../constants'
import useInput from '../../hooks/useInput'
import useOutput from '../../hooks/useOutput'
import BSCMemepad from '../../contracts/BSCMemepad.json'
import Web3 from 'web3'

//components

import { StyledCard, StyledBodyText, StepperWrapper } from '../cardContent'

const steps = ['Checkpoints', 'Ammount to stake'];




export default function HorizontalLinearStepper({setBnbBalance, bnbBalance, memepadBalance, setMemepadBalance, input, output}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { active, account } = useWeb3React()
  const getBnbBalance = useBnbBalance()
  const getInput = useInput()
  const getOutput = useOutput()
  const getMemepadBalance = useMemepadBalance()

  const tryMemepadBalance = async () => {

    try{

      if(active){
          const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'))
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = BSCMemepad.networks[networkId];
          const bscmemepad = new web3.eth.Contract(BSCMemepad.abi, deployedNetwork && deployedNetwork.address,)
          await bscmemepad.methods.balanceOf(account).call()
          .then(response => setMemepadBalance(response))
          .then(console.log(memepadBalance))
      }        
    }catch (err){
        console.log(err)   
      }

    }

    tryMemepadBalance()

  const tryBnbBalance = async () => {

    try{

      if(active){
        await web3.eth.getBalance(account) 
        .then(response => setBnbBalance(response))
        .then(console.log(bnbBalance))
      }

    }
    catch(err){

        console.log(err)

    }
  }

  tryBnbBalance()


  /*
  const balanceOfBnB = async () => { 
    if(active){
    await web3.eth.getBalance(account) 
    .then(response => setBnbBalance(response))
    .then(console.log(bnbBalance))
  }
  }

  const balanceOfMemepad = async () => {

    if(active){
      await bscmemepad.methods.balanceOf(account).call()
      .then(response => setMemepadBalance(response))
      .then(console.log(memepadBalance))
    }

  }

  balanceOfBnB()
  balanceOfMemepad()
  console.log(account)
*/

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };
  
  console.log(active + "stepper")

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}><Typography color="primary">{label}</Typography></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          
          {/* WHERE MAGIC HAPPENS*/}
          {activeStep === 0 && active
          
          ? <StepperWrapper>
        
            <StyledCard>
                <Typography>Connected</Typography>
                <Divider />
                <StyledBodyText variant='h6'>{account.substring(0, 6)}...{account.substring(account.length - 4)}</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography>BSCMPAD avaiable</Typography>
            <Divider />
            <StyledBodyText variant='h6'>Current balance:<br />{memepadBalance}</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography >BNB avaiable</Typography>
            <Divider />
            <StyledBodyText variant='h6'>Current balance:<br />{bnbBalance}</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography>Eligible to stake</Typography>
            <Divider />
            <StyledBodyText variant='h6'>You cannot stake if you have a active BSCPAD unstaken/witdraw request</StyledBodyText>
            </StyledCard>                     

        </StepperWrapper>

        :

            activeStep === 0 && !active
                      
            ? <StepperWrapper>

              <StyledCard>
                  <Typography>Connected</Typography>
                  <Divider />
                  <StyledBodyText variant='h6'>If not connected, click on the button on the top right corner</StyledBodyText>
              </StyledCard>

              <StyledCard>
              <Typography>BSCMPAD avaiable</Typography>
              <Divider />
              <StyledBodyText variant='h6'></StyledBodyText>
              </StyledCard>

              <StyledCard>
              <Typography >BNB avaiable</Typography>
              <Divider />
              <StyledBodyText variant='h6'></StyledBodyText>
              </StyledCard>

              <StyledCard>
              <Typography>Eligible to stake</Typography>
              <Divider />
              <StyledBodyText variant='h6'>You cannot stake if you have a active BSCPAD unstaken/witdraw request</StyledBodyText>
              </StyledCard>                     

            </StepperWrapper>


            :

            activeStep === 1

            ?
            <StepperWrapper>
              <StakeForm {...getBnbBalance} {...getInput} {...getOutput} {...getMemepadBalance}/>
            </StepperWrapper>

      :

      <StepperWrapper>
        
            <StyledCard>
                <Typography>Connected</Typography>
                <Divider />
                <StyledBodyText variant='h6'>If not connected, click on the button on the top right corner</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography>BSCMPAD avaiable</Typography>
            <Divider />
            <StyledBodyText variant='h6'>Current balance:</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography >BNB avaiable</Typography>
            <Divider />
            <StyledBodyText variant='h6'>Current balance:</StyledBodyText>
            </StyledCard>

            <StyledCard>
            <Typography>Eligible to stake</Typography>
            <Divider />
            <StyledBodyText variant='h6'>You cannot stake if you have a active BSCPAD unstaken/witdraw request</StyledBodyText>
            </StyledCard>

        </StepperWrapper>    
        
         }
          
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext} disabled={!active || memepadBalance === 0}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}