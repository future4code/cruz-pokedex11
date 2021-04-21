import React, { useContext, useEffect } from "react";
import CardHome from '../Components/CardHome';
import Pagination from '@material-ui/lab/Pagination';
import GlobalStateContext from '../Global/GlobalStateContext'


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
    }

    const nextPage = (e) => {
        setters.setPage(states.page + 1)
    }

    const prevPage = (e) => {
        setters.setPage(states.page - 1)
    }

    
    return (
        <div>
            { states.pokemons.length === 0 ? <p>Carreganodoo...</p> : (
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
            <Pagination
                count={35}
                variant="outlined"
                color="primary"
                page={states.page}
                hideNextButton={nextPage}
                hidePrevButton={prevPage}
                onChange={handleChange}
            />
        </div>

    )
}

export default Home