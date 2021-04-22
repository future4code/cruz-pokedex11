import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router';
import GlobalStateContext from '../Global/GlobalStateContext'
import { goToDetails } from '../Router/coordinator'
import { usePokemonData } from '../hook/usePokemonData';

export const CardHome = (props) => {
    const { requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const [pokeData] = usePokemonData(props.name)

    return (
        <div>
            {pokeData &&
                <div>
                    <img src={pokeData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokeData.name} />
                    <h2>{pokeData.name}</h2>
                    <p>{pokeData.types[0] && <p>{pokeData.types[0].type.name}</p>}</p>
                    <div>
                        <button onClick={() => requests.addPokedex(pokeData)}>Adicionar</button>
                        <button onClick={() => goToDetails(history, pokeData.name)}>Ver detalhes</button>
                    </div>
                </div>
            }
        </div>
    )

}

export default CardHome