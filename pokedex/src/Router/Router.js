import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Pokedex from '../Pages/Pokedex'
import Header from '../Components/Header'
import Battle from '../Pages/Battle'


function Router() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' >
                    <Header />
                    <Home />
                </Route>

                <Route exact path='/pokedex'>
                    <Header />
                    <Pokedex />
                </Route>

                <Route exact path='/details/:pokeName'>
                    <Header />
                    <Details />
                </Route>

                <Route exact path='/pokedex/details/:pokeName'>
                    <Header />
                    <Details />
                </Route>

                <Route exact path='/battle/:pokeName'>
                    <Header />
                    <Battle />
                </Route>

                <Route>
                    <Header />
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router