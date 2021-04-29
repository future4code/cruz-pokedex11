import React, { useContext, useState } from "react";
import GlobalStateContext from '../Global/GlobalStateContext'
import { useHistory } from 'react-router';
import { goToDetails, goToDetailsPokedex } from '../Router/coordinator'
import pokeBall from '../img/pokeball-white.png'
import addToPokedex from '../img/addToPokedex.png'
import removeToPokedex from '../img/removeToPokedex.png'
import details from '../img/details.png'
import { CardContainer, Name, Number, PokemonImage, PokeballImage, ContainerImage, ContainerType, ButtonGroup, ButtonImage, Button } from '../Style/CardStyles'
import { usePokemonData } from '../hook/usePokemonData'

function Card(props) {
    const { requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const [pokeData] = usePokemonData(props.name)
    const [type, setType] = useState('')


    const colorPokemon = () => {
        switch (pokeData.types[0] && pokeData.types[0].type.name) {
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
        if (pokeData && pokeData.id > 0 && pokeData.id < 10) {
            return '#00' + pokeData.id
        } else if (pokeData && pokeData.id > 10 && pokeData.id < 100) {
            return '#0' + pokeData.id
        } else {
            return '#' + pokeData.id
        }
    }

    const button = () => {
        if (history.location.pathname === '/') {
            return <ButtonGroup>
                <Button onClick={() => requests.addPokedex(pokeData)} title="Capturar pokemon">
                    <ButtonImage src={addToPokedex} alt={'botão para adicionar à pokédex'} />
                </Button>

                <Button onClick={() => goToDetails(history, pokeData.name)} title="Detalhes do pokemon">
                    <ButtonImage src={details} alt={'botão para ver detalhes'} />
                </Button>
            </ButtonGroup>

        } else {
            return <ButtonGroup>
                <Button onClick={() => requests.removePokedex(pokeData)} title="Remover da pokédex">
                    <ButtonImage src={removeToPokedex} alt={'botão para adicionar à pokédex'} />
                </Button>
                
                <Button onClick={() => goToDetailsPokedex(history, pokeData.name)} title="Detalhes do pokemon">
                    <ButtonImage src={details} alt={'botão para ver detalhes '} />
                </Button>
            </ButtonGroup>
        }
    }

    return (
        <div >
            {pokeData &&
                <CardContainer backgroundColor={colorPokemon} >
                    <Name>{pokeData.name[0].toUpperCase() + pokeData.name.substr(1)}</Name>
                    <Number>{numberPokemon()}</Number>
                    <ContainerType>
                        {type}
                    </ContainerType>
                    {button()}
                    <ContainerImage>
                        <PokemonImage src={pokeData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokeData.name} />
                    </ContainerImage>
                    <PokeballImage src={pokeBall} alt={'pokebola branca'} />
                </CardContainer>
            }
        </div>

    )
}

export default Card