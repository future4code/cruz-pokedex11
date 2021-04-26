import {useContext, useState} from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import {useHistory} from 'react-router';
import {goToFight} from '../Router/coordinator'
import {
    PokemonMoves,
    PokemonStats,
    PokemonType,
    PokemonImage,
    PokeContainer,
    ButtonBattle
} from "../Style/DetailsStyles";

export const CardDetails = (props) => {
    const {requests} = useContext(GlobalStateContext);
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
        <PokeContainer>
            <PokemonImage>
                {pokemon.sprites &&
                <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                     alt={pokemon.name}/>}
                {pokemon.sprites &&
                <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default}
                     alt={pokemon.name}/>}
            </PokemonImage>

            <PokemonType>
                {pokemon.types[0] && <p>{pokemon.types[0].type.name}</p>}
                {pokemon.types[1] && <p>{pokemon.types[1].type.name}</p>}
            </PokemonType>

            <PokemonMoves>
                {pokemon.moves[0] && <p>{pokemon.moves[0].move.name}</p>}
                {pokemon.moves[1] && <p>{pokemon.moves[1].move.name}</p>}
                {pokemon.moves[2] && <p>{pokemon.moves[2].move.name}</p>}
            </PokemonMoves>

            <PokemonStats>
                <h2> Stats </h2>
                {pokemon.stats[0] && <p><strong>HP:</strong> -- {pokemon.stats[0].base_stat}</p>}
                {pokemon.stats[1] && <p><strong>Attack:</strong> -- {pokemon.stats[1].base_stat}</p>}
                {pokemon.stats[2] && <p><strong>Defense:</strong> -- {pokemon.stats[2].base_stat}</p>}
                {pokemon.stats[3] && <p><strong>Special Attack:</strong> -- {pokemon.stats[3].base_stat}</p>}
                {pokemon.stats[4] && <p><strong>Special Defense:</strong> -- {pokemon.stats[4].base_stat}</p>}
                {pokemon.stats[5] && <p><strong>Speed:</strong> -- {pokemon.stats[5].base_stat}</p>}
            </PokemonStats>
            <ButtonBattle>
                {button()}
            </ButtonBattle>
        </PokeContainer>
    )

}
export default CardDetails
