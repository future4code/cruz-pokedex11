import styled from 'styled-components'

export const PokeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 200px 150px;
    margin: 30px;
`

export const PokemonImage = styled.div`
grid-column: 1/2;
grid-row: 2/3;

display:flex;
justify-content:center;
`

export const PokemonType = styled.div`
grid-column: 1/2;
grid-row: 3/3;

align-items:center;
text-align:center;
`


export const PokemonMoves = styled.div`
grid-column: 3/4;
grid-row: 2/3;

text-align:center;
`

export const PokemonStats = styled.div`
grid-column: 2/3;

display:flex;
flex-direction:column;
align-items:center;
`

export const ButtonBattle = styled.div`
grid-column: 2/3;
grid-row: 3/4;

display:flex;
justify-content:center;
align-self: flex-end;
`