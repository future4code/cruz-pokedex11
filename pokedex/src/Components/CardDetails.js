import { useContext } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

export const CardDetails = (props) => {
    const { requests } = useContext(GlobalStateContext);
    const pokemon = props.pokemon
    const history = useHistory()

    const button = () => {
        if (history.location.pathname === `/pokedex/details/${pokemon.name}`) {
            return <div>
                <button>Batalhar!</button>
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