import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import GlobalStateContext from '../Global/GlobalStateContext'

export const CardHome = (props) => {
    const { requests } = useContext(GlobalStateContext)
    const [pokemonData, setPokemonData] = useState()

    useEffect(() => {
        getPokemonData()
    }, [])


    const getPokemonData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${props.name}/`)
            setPokemonData(res.data)
            console.log(res.data)
        } catch (err) {
            alert("Ops!  Não foi possivel carregar a lista de pokemons")
        }
    }

    return (
        <div>
            {pokemonData &&
                <div>
                    <img src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonData.name} />
                    <h2>{pokemonData.name}</h2>
                    <p>{pokemonData.types[0] && <p>{pokemonData.types[0].type.name}</p>}</p>
                    <div>
                        <button onClick={() => requests.addPokedex(pokemonData)}>Adicionar</button>
                        <button onClick={() => requests.pokemonDetails(pokemonData)}>Ver detalhes</button>
                    </div>
                </div>
            }
        </div>
    )

}

export default CardHome