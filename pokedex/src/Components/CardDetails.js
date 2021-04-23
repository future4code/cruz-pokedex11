import { useContext } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import { useHistory } from 'react-router';
import {goToFight} from '../Router/coordinator'

export const CardDetails = (props) => {
    const { requests } = useContext(GlobalStateContext);
    const pokemon = props.pokemon
    const history = useHistory()

    const button = () => {
        if (history.location.pathname === `/pokedex/details/${pokemon.name}`) {
            return <div>
                <button onClick={() => goToFight(history, pokemon.name)}>Batalhar!</button>
                <button onClick={() => requests.removePokedex(pokemon)}>Remover da pokédex</button>
            </div>
        } else {
            return <button onClick={() => requests.addPokedex(pokemon)}>Adicionar a pokédex</button>
        }
    }

    return (
        <div>

            {pokemon.types[0] && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.types[1] && <p>{pokemon.types[1].type.name}</p>}

            {pokemon.sprites && <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemon.name} />}

            {pokemon.sprites && <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default} alt={pokemon.name} />}

            {pokemon.moves[0] && <p>{pokemon.moves[0].move.name}</p>}
            {pokemon.moves[1] && <p>{pokemon.moves[1].move.name}</p>}
            {pokemon.moves[2] && <p>{pokemon.moves[2].move.name}</p>}

            {pokemon.stats[0] && <p><strong>hp:</strong> -- {pokemon.stats[0].base_stat}</p>}
            {pokemon.stats[1] && <p><strong>attack:</strong> -- {pokemon.stats[1].base_stat}</p>}
            {pokemon.stats[2] && <p><strong>defense:</strong> -- {pokemon.stats[2].base_stat}</p>}
            {pokemon.stats[3] && <p><strong>special-attack:</strong> -- {pokemon.stats[3].base_stat}</p>}
            {pokemon.stats[4] && <p><strong>special-defense:</strong> -- {pokemon.stats[4].base_stat}</p>}
            {pokemon.stats[5] && <p><strong>speed:</strong> -- {pokemon.stats[5].base_stat}</p>}

            {button()}
        </div >
    )

}
export default CardDetails

// import React, { useContext } from "react";
// import GlobalStateContext from '../Global/GlobalStateContext'
// import { useHistory } from 'react-router';
// import { goToDetailsPokedex } from '../Router/coordinator'
// import axios from 'axios'
// import { baseUrl } from '../Constants/url'
// import pokeBall from '../img/pokeball-white.png'
// import addToPokedex from '../img/addToPokedex.png'
// import { Card, Name, Number, PokemonImage, PokeballImage, ContainerImage, Type, ContainerType, ButtonImage, Button } from '../Style/CardHomeStyles'
// import { goToDetails } from '../Router/coordinator'
// import { usePokemonData } from '../hook/usePokemonData';

// export const Card = (props) => {
//     const { requests } = useContext(GlobalStateContext)
//     const history = useHistory()
//     const [pokemonData, setPokemonData] = useState()
//     const [type, setType] = useState('')
//     const [pokeData] = usePokemonData(props.name)

//     useEffect(() => {
//         getPokemonData()
//     }, [])


//     const getPokemonData = async () => {
//         try {
//             const res = await axios.get(`${baseUrl}/${props.name}/`)
//             setPokemonData(res.data)
//         } catch (err) {
//             alert("Ops!  Não foi possivel carregar a lista de pokemons")
//         }
//     }



//     const colorPokemon = () => {
//         switch (pokemonData.types[0] && pokemonData.types[0].type.name) {
//             case 'grass':
//                 setType('planta')
//                 return 'rgb(43, 218, 177)'
//             case 'fire':
//                 setType('fogo')
//                 return 'rgb(247, 119, 106)'
//             case 'water':
//                 setType('água')
//                 return 'rgb(88, 171, 247)'
//             case 'bug':
//                 setType('Inseto')
//                 return 'rgb(140, 200, 104)'
//             case 'normal':
//                 setType('normal')
//                 return 'rgb(204, 150, 86)'
//             case 'poison':
//                 setType('venenoso')
//                 return 'rgb(148, 140, 181)'
//             case 'electric':
//                 setType('elétrico')
//                 return 'rgb(248, 189, 33)'
//             case 'ground':
//                 setType('terra')
//                 return 'rgb(178, 115, 108)'
//             case 'fighting':
//                 setType('lutador')
//                 return 'rgb(21, 33, 59)'
//             case 'psychic':
//                 setType('psíquico')
//                 return 'rgb(240, 181, 53)'
//             case 'rock':
//                 setType('pedra')
//                 return 'rgb(191, 192, 203)'
//             case 'flying':
//                 setType('voador')
//                 return 'rgb(218, 147, 190)'
//             case 'ghost':
//                 setType('fantasma')
//                 return 'rgb(137, 87, 122)'
//             case 'ice':
//                 setType('gelo')
//                 return 'rgb(122, 185, 226)'
//             case 'dragon':
//                 setType('dragão')
//                 return 'rgb(48, 173, 155)'
//             case 'steel':
//                 setType('metálico')
//                 return 'rgb(159, 165, 181)'
//             case 'dark':
//                 setType('noturno')
//                 return 'rgb(32, 28, 27)'
//             case 'fairy':
//                 setType('fada')
//                 return 'rgb(229, 160, 224)'
//             default:
//                 break;
//         }
//     }

//     const numberPokemon = () => {
//         if (pokemonData && pokemonData.id > 0 && pokemonData.id < 10) {
//             return '#00' + pokemonData.id
//         } else if (pokemonData && pokemonData.id > 10 && pokemonData.id < 100) {
//             return '#0' + pokemonData.id
//         } else {
//             return '#' + pokemonData.id
//         }
//     }

//     const button = () => {
//         if (history.location.pathname === `/`) {
//             return <Button onClick={() => requests.addPokedex(pokeData)} title="Capturar pokemon">
//                 <ButtonImage src={addToPokedex} alt={'botão para adicionar à pokédex'} />
//             </Button>
//         } else {
//             return <div>
//                 <button onClick={() => requests.removePokedex(props.poke)}>Remover</button>
//                 <button onClick={() => goToDetailsPokedex(history, props.poke.name)}>Ver detalhes</button>
//             </div>
//         }
//     }
//     return (
//         <div >
//             {pokemonData &&
//                 // onClick={() => requests.pokemonDetails(pokemonData)}
//                 <Card backgroundColor={colorPokemon} >
//                     <Name>{pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</Name>
//                     <Number>{numberPokemon()}</Number>
//                     <ContainerType>
//                         {type}
//                     </ContainerType>
//                     {button}
//                     <ContainerImage>
//                         <PokemonImage src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonData.name} />
//                     </ContainerImage>
//                     <PokeballImage src={pokeBall} alt={'pokebola branca'} />
//                 </Card>
//             }
//         </div>

//     )
// }

// export default Card