import React, { useContext } from "react";
import GlobalStateContext from '../Global/GlobalStateContext'

export const CardPokedex = (props) => {

    const { requests } = useContext(GlobalStateContext)


    return (
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