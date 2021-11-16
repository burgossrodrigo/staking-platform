import { Card, Paper, Typography } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styled(Card)`

    width: 25vw;
    min-width: 20vh;
    margin: 20px;
    border-radius: 5px 5px 5px 5px;
    background-color: #1B1F22;
    padding: 15px; 


`

export const CardWrapper = styled.div`

    display: flex;
    flex-direction: collumn;
    margin-top: 15vh;


`

export const StyledPaper = styled(Paper)`

    width: 25vw;
    height: 12vh;

`

export const StyledBodyText = styled(Typography)`

    margin: 15px;

`

export const StepperWrapper = styled.div`

    display: flex;
    flex-direction: row;

`