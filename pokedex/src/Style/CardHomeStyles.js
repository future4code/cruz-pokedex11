import styled from 'styled-components'


export const Card = styled.div`
  background: rgb(43, 218, 177);
  padding: .8rem;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  
  &:hover{
    box-shadow: 2px 2px 5px gray;
  }
`

export const Name = styled.p`
  grid-column: 1 / 4;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0;
`

export const Number = styled.p `
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  color: gray;
  opacity: .5;
  text-align: right;
  padding: .5rem;
`

export const ContainerType = styled.div `
  font-size: 0.8rem;
  background: rgba(255, 255, 255, .2);
  display:flex;
  align-items: center;
  justify-content: center;
  height: 1.3rem;
  border-radius: 10px;
  padding: .2rem;
`

export const Type = styled.p `
  margin: 0;
  grid-column: 1 / 2;

`
export const Button = styled.button `
  cursor: pointer;

  grid-column: 1 / 2;
  grid-row: 3 / 4;

  height: 2rem;
  margin-top: 1rem;
  background: none;
  border: none;
  width: 2rem;

  &:hover{
    transform: scale(1.1)
  }
  &:active{
    transform: scale(1)
  }
`

export const ButtonImage = styled.img `
  width: 2rem;
`

export const ContainerImage = styled.div `
  grid-column: 3 / 5;
  grid-row: 2 / 4;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PokemonImage = styled.img `
  width: 5rem;
  height:6rem;
  z-index: 10;

`

export const PokeballImage = styled.img `
  width: 8rem;
  position: absolute;
  margin: 2.5% 0 0 10%;
  opacity: .4;
`


