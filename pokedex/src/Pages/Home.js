import React, { useContext, useEffect } from "react";
import CardHome from '../components/CardHome';
import Pagination from '@material-ui/lab/Pagination';
import GlobalStateContext from '../Global/GlobalStateContext'
import { Main } from '../Style/HomeStyles'

export function Home() {
    const { states, setters, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
    }, [requests])

    let arrayPokemons = states.pokemons && states.pokemons.filter((pokemon) => {
        const onPokedex = states.pokedex && states.pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === pokemon.name
        })
        if (onPokedex) {
            return false
        } else {
            return true
        }
    })

    const handleChange = (e, value) => {
        setters.setPage(value)
        setters.setPageChange(states.page * 30)
    }

    return (
        <div>
            <Main>
                {states.pokemons.length === 0 ? <p>Carregandoo...</p> : (
                    arrayPokemons && arrayPokemons.map((poke) => {
                        return (
                            <CardHome
                                key={poke.name}
                                name={poke.name}
                            />
                        )

                    })
                )
                }

            </Main>
            <Pagination
                count={35}
                variant="outlined"
                color="primary"
                page={states.page}
                onChange={handleChange}
            />
        </div >
    )
}

export default Home