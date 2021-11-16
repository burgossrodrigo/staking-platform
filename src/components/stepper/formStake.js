import { TextField } from '@mui/material'
import styled from 'styled-components'
import { StyledFormWrapper } from '..'

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StakeForm = () => {



    return(<>
        <StyledFormWrapper>
            <StyledTextField id="outlined-basic" label="BNB" variant="outlined" />
            <StyledTextField id="outlined-basic" label="BSCMEMEPAD" variant="outlined" />
        </StyledFormWrapper>
    </>)

}

export default StakeForm