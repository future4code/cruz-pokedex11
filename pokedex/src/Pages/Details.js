import { useContext } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';


export const Details = () => {
    const {states} = useContext(GlobalStateContext);
    const pokemon = states.detailsPage

    return (
        <div>
            {pokemon.types[0] && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.types[1] && <p>{pokemon.types[1].type.name}</p>}

            {pokemon.sprites.front_default && <img src={pokemon.sprites.animated.front_default} />}

            {pokemon.sprites.back_default && <img src={pokemon.sprites.animated.back_default} />}

            {pokemon.moves[0] && <p>{pokemon.moves[0].move.name}</p>}
            {pokemon.moves[1] && <p>{pokemon.moves[1].move.name}</p>}
            {pokemon.moves[2] && <p>{pokemon.moves[2].move.name}</p>}

            {pokemon.status[0] && <p><strong>hp:</strong> -- {pokemon.status[0].base_stat}</p>}
            {pokemon.status[1] && <p><strong>attack:</strong> -- {pokemon.status[1].base_stat}</p>}
            {pokemon.status[2] && <p><strong>defense:</strong> -- {pokemon.status[2].base_stat}</p>}
            {pokemon.status[3] && <p><strong>special-attack:</strong> -- {pokemon.status[3].base_stat}</p>}
            {pokemon.status[4] && <p><strong>special-defense:</strong> -- {pokemon.status[4].base_stat}</p>}
            {pokemon.status[5] && <p><strong>speed:</strong> -- {pokemon.status[5].base_stat}</p>}



        </div>
    )

}
export default Details