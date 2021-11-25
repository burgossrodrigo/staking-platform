import { Grid, Card, CardActions, CardContent,
         Typography, Alert, Button } from '@mui/material'
import Header from '../../components/header'
import usePage from '../../hooks/usePage'
import useWallet from '../../hooks/useWallet'
import styled from 'styled-components'
import BScMemepad from '../../assets/image/corrected.png'
import KSM from '../../assets/image/LP.png'
import LP from '../../assets/image/LogoMain3.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Home = () => {

    const page = usePage()
    const wallet = useWallet()

    const StyledCard = styled(Card)`
    
    width: 30vw;
        margin: 0 auto;
        color: black;

    
    `

    const StyledImg = styled.img`
    

    
    `

    const StyledCardBanner = styled(CardContent)`
    
        background-color: black;
        height: 30%;
        width: 100%;
        position: relative;
    
    `

    const StyledCardContent = styled(CardContent)`
    
    background-color: white;
    height: 70%;
    width: 100%;
    position: relative;

`
    
    const StyledHomeContainer = styled(Grid)`
    
        margin: 0 auto;
    
    `

    const StyledHomeGridItem = styled(Grid)`
    
    width: 60vw;
    height: 60vh;
    margin-top: 15vh;
    
    `

    const StyledAlert = styled(Alert)`
    
        width: max-content;
        border-radius: 15px 15px 15px 15px;
    
    `

    const StyledCardActions = styled(CardActions)`
    

    
    `

    const StyledButton = styled(Button)`
    

    
    `

    const StyledTitle = styled(Typography)`
    
        margin: 0 20% 0;
        margin-top: 15vh;
        color: black;
    
    `

    return (<>
        <Header {...page} {...wallet} />
        <StyledTitle variant="h2" color="contrast">Active and upcoming vaults</StyledTitle>
        <StyledHomeContainer container >
            <StyledHomeGridItem item xs={12} sm={12} md={6} lg={4} xl={4}>
                <StyledCard>
                    <StyledCardBanner>
                        <StyledImg src={BScMemepad} />
                    </StyledCardBanner>
                    <StyledCardContent>
                        <Typography color="contrast" variant="h6">
                            BSC Memepad
                        </Typography>
                        <StyledAlert severity="success">Active</StyledAlert>                     
                    </StyledCardContent>
                    <StyledCardActions>
                        <StyledButton endIcon={<ChevronRightIcon />}>RESEARCH AND STAKE</StyledButton>
                    </StyledCardActions>
                </StyledCard>
            </StyledHomeGridItem>
            <StyledHomeGridItem item xs={12} sm={12} md={6} lg={4} xl={4}>
            <StyledCard>
                    <StyledCardBanner>
                        <StyledImg src={KSM} />
                    </StyledCardBanner>
                    <StyledCardContent>
                    <Typography color="contrast" variant="h6">
                           BSCM-BNB LP
                        </Typography>
                        <StyledAlert severity="info">Soon</StyledAlert>    
                    </StyledCardContent>
                    <StyledCardActions>
                        <StyledButton disable={true} endIcon={<ChevronRightIcon />}>RESEARCH AND STAKE</StyledButton>
                    </StyledCardActions>                      
                </StyledCard>
            </StyledHomeGridItem>
            <StyledHomeGridItem item xs={12} sm={12} md={6} lg={4} xl={4}>
            <StyledCard>
                    <StyledCardBanner>
                        <StyledImg src={LP} />
                    </StyledCardBanner>
                    <StyledCardContent>
                        <Typography color="contrast" variant="h6">
                            KCC Memepad        
                        </Typography>
                        <StyledAlert severity="info">Soon</StyledAlert>                   
                    </StyledCardContent>
                    <StyledCardActions>
                        <StyledButton disable={true} endIcon={<ChevronRightIcon />}>RESEARCH AND STAKE</StyledButton>
                    </StyledCardActions>                      
                </StyledCard>
            </StyledHomeGridItem>                        
        </StyledHomeContainer>

    </>)

}

export default Home