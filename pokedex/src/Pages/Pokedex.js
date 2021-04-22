import { useContext } from "react"
import CardPokedex from "../Components/CardPokedex"
import GlobalStateContext from '../Global/GlobalStateContext'

export function Pokedex() {
    const { states, requests } = useContext(GlobalStateContext)

    return (
        <div>
            {states.pokedex.length === 0 ? <p>Carregando...</p> : (
                <div>
                    {states.pokedex && states.pokedex.map((poke) => {
                        return <div>
                            <CardPokedex
                                key={poke.name}
                                image={poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                                name={poke.name}
                                type={poke.types[0].type.name}
                                poke={poke}
                            />

                        </div>
                    })}
                </div>
            )
            }
        </div>
    )

}
export default Pokedex