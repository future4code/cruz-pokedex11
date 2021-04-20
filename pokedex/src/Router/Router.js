import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Pokedex from '../Pages/Pokedex'
import Header from '../components/Header'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Header /> */}
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/pokedex'>
                    <Pokedex />
                </Route>

                <Route exact path='/details/:id'>
                    <Details />
                </Route>

                <Route>
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router