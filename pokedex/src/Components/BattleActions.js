import axios from "axios";
import { useState, useContext } from "react";
import { baseUrlBattle } from "../Constants/url";
import GlobalStateContext from '../Global/GlobalStateContext';
import { goToPokedex } from "../Router/coordinator";
import { useHistory } from 'react-router';

export const BattleActions = (props) => {
    const pokemon = props.pokemon
    const { states } = useContext(GlobalStateContext);
    const [move, setMove] = useState()
    const [moveOpponet, setMoveOpponet] = useState()
    const [moveOpponetDetail, setMoveOpponetDetail] = useState()
    const [moveDetail, setMoveDetail] = useState()
    const [hp, setHp] = useState(100)
    const [hpOpponent, setHpOpponent] = useState(100)
    const [defese, setDesfese] = useState(0)
    const [defeseOpponent, setDefeseOpponent] = useState(0)
    const [attack, setAttack] = useState(0)
    const [attackOpponent, setAttackOpponent] = useState(0)
    const [powerOpponetDefense, setPowerOpponetDefense] = useState(0)
    const [powerDefense, setPowerDefense] = useState(0)
    const [yourTextAttack, setYourTextAttack] = useState('')
    const [opponentTextAttack, setOpponentTextAttack] = useState('')
    const pokeData = states.moves
    const history = useHistory()

    const move1 = pokeData && pokeData.moves[0].move.name
    const move2 = pokeData && pokeData.moves[1].move.name
    const move3 = pokeData && pokeData.moves[2].move.name

    let arrayMove = [move1, move2, move3]

    let moveChoice = arrayMove[Math.floor(Math.random() * arrayMove.length)]

    const moveName = (value) => {

        setMove(
            async () => {
                try {
                    const res = await axios.get(`${baseUrlBattle}/${value}/`)
                    setMoveDetail(res.data)
                } catch (err) {
                    alert("Nao foi possível os detalhes do movimento")
                }
            }
        )

        setMoveOpponet(
            async () => {

                try {
                    const res = await axios.get(`${baseUrlBattle}/${moveChoice}/`)
                    setMoveOpponetDetail(res.data)
                } catch (err) {
                    alert("Nao foi possível os detalhes do movimento")
                }
            }
        )

        if (hp > 0 && hpOpponent > 0) {
            if (moveOpponetDetail) {

                if (moveOpponetDetail.power <= 0) { setAttackOpponent(0) } else { setAttackOpponent(moveOpponetDetail.power) }
                if (moveDetail.power <= 0) { setAttack(0) } else { setAttack(moveDetail.power) }
                if (pokeData.stats[2].base_stat <= 0) { setDefeseOpponent(0) } else { setDefeseOpponent(pokeData.stats[2].base_stat) }
                if (pokemon.stats[2].base_stat <= 0) { setDesfese(0) } else { setDesfese(pokemon.stats[2].base_stat) }

                if (defese < attackOpponent) { setPowerDefense(attackOpponent - defese) } else { setPowerDefense(attackOpponent * 0.80) }

                setHp(hp - powerDefense)
                if (moveOpponetDetail.flavor_text_entries[0].flavor_text === '') { setOpponentTextAttack('null') } else { setOpponentTextAttack(moveOpponetDetail.flavor_text_entries[0].flavor_text) }
                if (defeseOpponent < attack) { setPowerOpponetDefense(attack - defeseOpponent) } else { setPowerOpponetDefense(attack * 0.80) }

                setHpOpponent(hpOpponent - powerOpponetDefense)
                if (moveDetail.flavor_text_entries[0].flavor_text === '') { setYourTextAttack('null') } else { setYourTextAttack(moveDetail.flavor_text_entries[0].flavor_text) }
            }
        }

    }

    if (hp <= 0) {
        alert("Você perdeu! =(")
        goToPokedex(history)

    } else if (hpOpponent <= 0) {
        alert("Você ganhouu!!")
        goToPokedex(history)
    }


    return (
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.sprites && <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default} alt={pokemon.name} />}
            {pokemon.types[0] && <p>{pokemon.types[0].type.name}</p>}
            { pokemon.moves[0] && <button onClick={() => moveName(pokemon.moves[0].move.name)}>{pokemon.moves[0].move.name}</button>}
            { pokemon.moves[1] && <button onClick={() => moveName(pokemon.moves[1].move.name)}>{pokemon.moves[1].move.name}</button>}
            { pokemon.moves[2] && <button onClick={() => moveName(pokemon.moves[2].move.name)}>{pokemon.moves[2].move.name}</button>}
            <p><strong>hp:</strong> {hp}</p>
            <p>{opponentTextAttack}</p><p> Isso causou {powerOpponetDefense} de dano</p>

            {pokeData ? (
                <div>
                    <h1>{pokeData.name}</h1>
                    {pokeData.sprites && <img src={pokeData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokeData.name} />}
                    {pokeData.types[0] && <p>{pokeData.types[0].type.name}</p>}
                    <p><strong>hp:</strong> {hpOpponent}</p>
                    <p>{yourTextAttack}</p><p> Isso causou {powerDefense} de dano</p>
                </div>
            ) : (<p>Carregando ....</p>)
            }

        </div>
    )

}

export default BattleActions