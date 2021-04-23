import pikachu from '../img/pikachu.jfif'
import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Messages = styled.p `
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
`
const Title = styled(Messages) `
  color: red;
`
const SubTitle = styled(Messages) `
  font-size: 1rem;
`

function ScreenWithoutPokemons() {
  return <Container>
    <img src={pikachu} alt={'pikachu em cima da pokebola'} />
    <Title>Ops! Pokédex vazia</Title>
    <SubTitle>Pokemons tem que pegar!</SubTitle>
  </Container>
}

export default ScreenWithoutPokemons