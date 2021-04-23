import loadingGif from '../img/pokeball_gif.gif'
import styled from 'styled-components'

const Container = styled.div `
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Loading() {
  return(
    <Container>
      <img src={loadingGif} alt={'Gif de pokebola para carregar'}/>
    </Container>
  )
}

export default Loading