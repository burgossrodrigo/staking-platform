import { Route, Switch } from 'react-router-dom'

const App = () => {

    <Switch>
        <Route component = { Home }  path="/" exact />
        <Route component = { BSCMemepad }  path="/Bscmemepad" />        
    </Switch>

}