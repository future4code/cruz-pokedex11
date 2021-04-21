import { useContext } from "react"
import CardPokedex from "../Components/CardPokedex"
import GlobalStateContext from '../Global/GlobalStateContext'

export function Pokedex() {
    const { states, requests } = useContext(GlobalStateContext)

    const renderPage = () => {

        {
            states.pokedex && states.pokedex.map((poke) => {
                <div>
                    <img src={poke.image} alt={poke.name} />
                    <h2>{poke.name}</h2>
                    <p>{poke.type}</p>
                    <div>
                        <button onClick={() => requests.removePokedex(poke.poke)}>Remover</button>
                        <button onClick={() => requests.pokemonDetails(poke.poke)}>Ver detalhes</button>
                    </div>
                </div>
            })
        }


    }

    return (
        <div>
            {renderPage}
            {states.pokedex.length === 0 ? <p>Carregando...</p> : (
                states.pokedex && states.pokedex.map((poke) => {
                    // <CardPokedex
                    //     key={poke.id}
                    //     image={poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                    //     name={poke.name}
                    //     type={poke.types[0].type.name}
                    //     poke={poke}
                    // />
                    <div>
                        <img src={poke.image} alt={poke.name} />
                        <h2>{poke.name}</h2>
                        <p>{poke.type}</p>
                        <div>
                            <button onClick={() => requests.removePokedex(poke.poke)}>Remover</button>
                            <button onClick={() => requests.pokemonDetails(poke.poke)}>Ver detalhes</button>
                        </div>
                    </div>

                })
            )
            }
        </div>
    )

}
export default Pokedex