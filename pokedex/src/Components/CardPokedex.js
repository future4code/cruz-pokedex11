import React, { useContext } from "react";
import GlobalStateContext from '../Global/GlobalStateContext'

export const CardPokedex = (props) => {

    const { states, requests } = useContext(GlobalStateContext)

    return (
        // states.pokedex && states.pokedex.map((poke) => {
        //     <div key={poke.id}>
        //         <img src={poke.sprites.versions['generation-v']['black-white'].animated.front_default} alt={poke.name} />
        //         <h2>{poke.name}</h2>
        //         <p>{poke.type}</p>
        //         <div>
        //             <button onClick={() => requests.removePokedex(poke)}>Remover</button>
        //             <button onClick={() => requests.pokemonDetails(poke)}>Ver detalhes</button>
        //         </div>
        //     </div>
        // })

            <div>
                <img src={props.image} alt={props.name} />
                <h2>{props.name}</h2>
                <p>{props.type}</p>
                <div>
                    <button onClick={() => requests.removePokedex(props.poke)}>Remover</button>
                    <button onClick={() => requests.pokemonDetails(props.poke)}>Ver detalhes</button>
                </div>
            </div>
        
    )
}
export default CardPokedex