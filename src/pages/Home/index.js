import { Grid, Card, CardActions, CardContent,
         Typography, Alert, Button } from '@mui/material'
import usePage from '../../hooks/usePage'
import styled from 'styled-components'
import BScMemepad from '../../assets/image/corrected.png'
import KSM from '../../assets/image/LP.png'
import LP from '../../assets/image/LogoMain3.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Home = () => {

    const pages = usePage()

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
    margin-top: 10vh;
    
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

    console.log(pages.page)

    return (<>
        <StyledTitle variant="h2" color="contrast">Active and upcoming vaults</StyledTitle>
        <StyledHomeContainer container >
            <StyledHomeGridItem item xs={12} sm={12} md={6} lg={4} xl={4}>
                <StyledCard>
                    <StyledCardBanner>
                        <StyledImg src={BScMemepad} />
                    </StyledCardBanner>
                    <StyledCardContent>
                        <Typography color="contrast" variant="h4">
                            BSC Memepad
                        </Typography>
                        <br />
                        <StyledAlert severity="success">Active</StyledAlert>
                        <br />
                        <Typography color="contrast" variant="h6">
                            BSCM Stakyng APY
                        </Typography>                                             
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
                        <br />
                    </StyledCardBanner>
                    <StyledCardContent>
                    <Typography color="contrast" variant="h4">
                           BSCM-BNB LP
                        </Typography>
                        <br />
                        <StyledAlert severity="info">Soon</StyledAlert>
                        <br />
                        <Typography color="contrast" variant="h6">
                        BSCM-BNB Stakyng APY
                        </Typography>                               
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
                        <Typography color="contrast" variant="h4">
                            KCC Memepad        
                        </Typography>
                        <br />
                        <StyledAlert severity="info">Soon</StyledAlert>
                        <br />
                        <Typography color="contrast" variant="h6">
                            KCCM Staking APY        
                        </Typography>                                           
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