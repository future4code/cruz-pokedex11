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
    const [type, setType] = useState('')


    useEffect(() => {
        getPokemonData()
    }, [])


    const getPokemonData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${props.name}/`)
            setPokemonData(res.data)
        } catch (err) {
            alert("Ops!  Não foi possivel carregar a lista de pokemons")
        }
    }

    const colorPokemon = () => {
        switch (pokemonData.types[0] && pokemonData.types[0].type.name) {
            case 'grass':
                setType('planta')
                return 'rgb(43, 218, 177)'
            case 'fire':
                setType('fogo')
                return 'rgb(247, 119, 106)'
            case 'water':
                setType('água')
                return 'rgb(88, 171, 247)'
            case 'bug':
                setType('Inseto')
                return 'rgb(140, 200, 104)'
            case 'normal':
                setType('normal')
                return 'rgb(204, 150, 86)'
            case 'poison':
                setType('venenoso')
                return 'rgb(148, 140, 181)'
            case 'electric':
                setType('elétrico')
                return 'rgb(248, 189, 33)'
            case 'ground':
                setType('terra')
                return 'rgb(178, 115, 108)'
            case 'fighting':
                setType('lutador')
                return 'rgb(21, 33, 59)'
            case 'psychic':
                setType('psíquico')
                return 'rgb(240, 181, 53)'
            case 'rock':
                setType('pedra')
                return 'rgb(191, 192, 203)'
            case 'flying':
                setType('voador')
                return 'rgb(218, 147, 190)'
            case 'ghost':
                setType('fantasma')
                return 'rgb(137, 87, 122)'
            case 'ice':
                setType('gelo')
                return 'rgb(122, 185, 226)'
            case 'dragon':
                setType('dragão')
                return 'rgb(48, 173, 155)'
            case 'steel':
                setType('metálico')
                return 'rgb(159, 165, 181)'
            case 'dark':
                setType('noturno')
                return 'rgb(32, 28, 27)'
            case 'fairy':
                setType('fada')
                return 'rgb(229, 160, 224)'
            default:
                break;
        }
    }

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
                <Card backgroundColor={colorPokemon}>
                    <Name>{pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</Name>
                    <Number>{numberPokemon()}</Number>
                    <ContainerType>
                        {type}
                    </ContainerType>
                    <Button title="Capturar pokemon">
                        <ButtonImage src={addToPokedex} alt={'botão para adicionar à pokédex'} />
                    </Button>
                    <ContainerImage>
                        <PokemonImage src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonData.name} />
                    </ContainerImage>
                    <PokeballImage src={pokeBall} alt={'pokebola branca'} />
                </Card>
            }
        </div>
    )

}

export default CardHome