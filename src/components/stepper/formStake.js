import { TextField } from '@mui/material'
import styled from 'styled-components'

const StyledTextField = styled(TextField)`

    margin-top: 10px;

`

const StakeForm = () => {



    return(<>

        <StyledTextField id="outlined-basic" label="BNB" variant="outlined" />
        <StyledTextField id="outlined-basic" label="BSCMEMEPAD" variant="outlined" />
        
    </>)

}

export default StakeForm