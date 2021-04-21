import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import GlobalStateContext from "./GlobalStateContext";
import { goToDetails } from '../Router/coordinator'

const GlobalStateProvider = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        try {
            const res = await axios.get(`${baseUrl}/?offset${page}&limit=30`)
            setPokemons(res.data.results);
        } catch (err) {
            alert("Nao foi possível carregar a lista de pokémons, tente novamente mais tarde")
        };
    };


    const addPokedex = (poke) => {
        const onPokedex = pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === poke.name
        })    
        if (!onPokedex) {
            const newPokedex = [...pokedex, poke]
            setPokedex(newPokedex)
            alert(`${poke.name} foi adicionado a pokédex!`)
        } else {
            alert(`${poke.name} já consta em sua pokédex.`)
        }
    }

    const removePokedex = (poke) => {
        const onPokedex = pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === poke.name
        })    
        if (onPokedex) {
            const indexPokemon = pokedex.findIndex((pokemon) => pokemon.name === poke.name);
            const newPokeList = [...pokemons, poke]

            setPokemons(newPokeList)
            pokedex.splice(indexPokemon, 1)

            alert(`${poke.name} foi removido da pokédex!`)
        } else {
            alert(`${poke.name} não pertence a sua pokedex.`)
        }

    };

    const states = { pokemons, pokedex, page };
    const setters = { setPokemons, setPokedex, setPage };
    const requests = { getPokemons, addPokedex, removePokedex };

    const data = { states, setters, requests };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    );
};

export default GlobalStateProvider;
