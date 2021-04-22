import { useContext } from "react"
import CardPokedex from "../components/CardPokedex"
import GlobalStateContext from '../Global/GlobalStateContext'

export function Pokedex() {
    const { states, requests } = useContext(GlobalStateContext)

    return (
        <div>
            {states.pokedex.length === 0 ? <p>Carregando...</p> : (
                states.pokedex && states.pokedex.map((poke) => {
                    <CardPokedex
                        key={poke.name}
                        image={poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                        name={poke.name}
                        type={poke.types[0].type.name}
                        poke={poke}
                    />
                    // <div>
                    //     <img src={poke.sprites.versions['generation-v']['black-white'].animated.front_default} alt={poke.name} />
                    //     <h2>{poke.name}</h2>
                    //     <p>{poke.types[0] && <p>{poke.types[0].type.name}</p>}</p>
                    //     <div>
                    //         <button onClick={() => requests.addPokedex(poke)}>Adicionar</button>
                    //         <button onClick={() => requests.pokemonDetails(poke)}>Ver detalhes</button>
                    //     </div>
                    // </div>


                })
            )
            }
        </div>
    )

}
export default Pokedex