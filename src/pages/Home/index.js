import { Grid, Card } from '@mui/material'
import Header from '../../components/header'

const Home = () => {

    return (<>
        <Header />
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Grid>                        
        </Grid>

    </>)

}

export default Home