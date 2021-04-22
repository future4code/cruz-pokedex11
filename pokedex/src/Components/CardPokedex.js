import React, { useContext } from "react";
import GlobalStateContext from '../Global/GlobalStateContext'
import { useHistory } from 'react-router';
import { goToDetailsPokedex } from '../Router/coordinator'

export const CardPokedex = (props) => {

    const { requests } = useContext(GlobalStateContext)
    const history = useHistory()


    return (
            <div>
                <img src={props.image} alt={props.name} />
                <h2>{props.name}</h2>
                <p>{props.type}</p>
                <div>
                    <button onClick={() => requests.removePokedex(props.poke)}>Remover</button>
                    <button onClick={() => goToDetailsPokedex(history, props.poke.name)}>Ver detalhes</button>
                </div>
            </div>
        
    )
}
export default CardPokedex