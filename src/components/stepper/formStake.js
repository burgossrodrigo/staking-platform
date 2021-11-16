import { TextField, Box, Slider } from '@mui/material'
import styled from 'styled-components'
import { StyledFormWrapper } from '..'

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StakeForm = () => {

    function valuetext(value) {
        return `${value}%`;
      }
      
    function DiscreteSlider() {
        return (
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="TOkens"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
          </Box>
        );
      }



    return(<>
        <StyledFormWrapper>
            <StyledTextField id="outlined-basic" label="BNB" variant="outlined" />
            <DiscreteSlider />
            <StyledTextField id="outlined-basic" label="BSCMEMEPAD" variant="outlined" />
            <DiscreteSlider />
        </StyledFormWrapper>
    </>)

}

export default StakeForm