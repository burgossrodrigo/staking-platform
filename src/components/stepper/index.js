import * as React from 'react';
import StakeForm from './formStake'
import { CardActions, Divider, Typography, 
        Button, StepLabel, Step, 
        Stepper, Box  } from '@mui/material'
import useBnbBalance from '../../hooks/useBnbBalance'
import { useWeb3React } from '@web3-react/core'
//import BNB from '../../contracts/BNB.json'
import { web3 } from '../../constants'

//components

import { StyledCard, StyledBodyText, StepperWrapper } from '../cardContent'

const steps = ['Checkpoints', 'Ammount to stake', 'Pre-authorization', 'Confirm', 'Confirmation'];




export default function HorizontalLinearStepper({setBnbBalance, bnbBalance}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { active, account } = useWeb3React()
  const getBnbBalance = useBnbBalance()

  const balanceOfBnB = async () => { 
    if(active){
    await web3.eth.getBalance(account) 
    .then(response => setBnbBalance(response))
    .then(console.log(bnbBalance))
  }
  }

  balanceOfBnB()


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
            <StyledBodyText variant='h6'>Current balance:</StyledBodyText>
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


            :

            activeStep === 1

            ?
            <StepperWrapper>
              <StakeForm {...getBnbBalance}/>
            </StepperWrapper>

            :

            activeStep === 2

            ? <StepperWrapper>
        
            <StyledCard>
                <Typography>Pre-authorization</Typography>
                <Divider />
                <StyledBodyText variant='h6'>You want to stake the amount of {} BNB with </StyledBodyText>
                <StyledBodyText variant='h6'>the amount of {} BSCMEMEPAD?</StyledBodyText>
                <CardActions>
                  <Button size="small" color="primary">
                    I want to
                  </Button>
              </CardActions>
            </StyledCard>

            <StyledCard>
            </StyledCard>

            <StyledCard>
            </StyledCard>              

        </StepperWrapper>

        :

        activeStep === 3

        ? <StepperWrapper>
            <StyledCard>
            </StyledCard>

            <StyledCard>
            <Typography>Authorization</Typography>
                <Divider />
                <StyledBodyText variant='h6'>Stake the amount of {} BNB with </StyledBodyText>
                <StyledBodyText variant='h6'>the amount of {} BSCMEMEPAD</StyledBodyText>
                <CardActions>
                  <Button size="small" color="primary">
                    Stake
                  </Button>
              </CardActions>
            </StyledCard>

            <StyledCard>
            </StyledCard>
        </StepperWrapper>

        : activeStep === 4
        ? <StepperWrapper>
        <StyledCard>
        </StyledCard>

        <StyledCard>
        </StyledCard>

        <StyledCard>
        <Typography>Authorization</Typography>
                <Divider />
                <StyledBodyText variant='h6'></StyledBodyText>
                <StyledBodyText variant='h6'></StyledBodyText>
        </StyledCard>
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

            <Button onClick={handleNext} disabled={!active}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}