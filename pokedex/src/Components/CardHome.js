import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import GlobalStateContext from '../Global/GlobalStateContext'
import pokeBall from '../img/pokeball-white.png'
import addToPokedex from '../img/addToPokedex.png'
import { Card, Name, Number, PokemonImage, PokeballImage, ContainerImage, Type, ContainerType, ButtonImage, Button } from '../Style/CardHomeStyles'


export const CardHome = (props) => {
    const { requests } = useContext(GlobalStateContext)
    const [pokemonData, setPokemonData] = useState()
    // const [pokemonColor, setPokemonColor] = useState({})

    useEffect(() => {
        getPokemonData()
        // getColorPokemon()
    }, [])


    const getPokemonData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${props.name}/`)
            setPokemonData(res.data)
        } catch (err) {
            alert("Ops!  Não foi possivel carregar a lista de pokemons")
        }
    }

    // const getColorPokemon = async () => {
    //     try{
    //         const res = await axios.get(`${baseUrl}/pokemon-color/${props.name}/`)
    //         setPokemonColor(res)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    const numberPokemon = () => {
        if (pokemonData && pokemonData.id > 0 && pokemonData.id < 10) {
            return '#00' + pokemonData.id
        } else if (pokemonData && pokemonData.id > 10 && pokemonData.id < 100) {
            return '#0' + pokemonData.id
        } else {
            return '#' + pokemonData.id
        }
    }
    return (
        <div onClick={() => requests.pokemonDetails(pokemonData)}>
            {pokemonData &&
                <Card>
                    <Name>{pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</Name>
                    <Number>{numberPokemon()}</Number>
                    <ContainerType>
                        {pokemonData.types[0] && <Type>{pokemonData.types[0].type.name}</Type>}
                    </ContainerType>
                    <Button>
                        <ButtonImage src={addToPokedex} alt={'botão para adicionar à pokédex'} />
                    </Button>
                    <ContainerImage>
                        <PokemonImage src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonData.name} />
                    </ContainerImage>
                    <PokeballImage src={pokeBall} alt={'pokebola branca'} />

                    {/* <ButtonGroup>
                        <button onClick={() => requests.addPokedex(pokemonData)}>Adicionar</button>
                        <button >Ver detalhes</button>
                    </ButtonGroup> */}
                </Card>
            }
        </div>
    )

}

export default CardHome