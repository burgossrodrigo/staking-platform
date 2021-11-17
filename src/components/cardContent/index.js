import { Card, Paper, Typography } from '@mui/material'
import styled from 'styled-components'
import bg from '../../assets/image/diamond-coin.png'

export const StyledCard = styled(Card)`

    width: 25vw;
    height: 38vh;
    margin: 20px;
    border-radius: 5px 5px 5px 5px;
    background-color: #1B1F22;
    padding: 15px;
    background-image: url(${bg});
    background-position: right 110% top -40%;
    background-repeat: no-repeat;


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
    opacity: 1;

`

export const StepperWrapper = styled.div`

    display: flex;
    flex-direction: row;
    min-height: 370px;

`