import { Card, Name, Image, ButtonGroup } from '../styles/components/CardPokemonStyles'

function CardPokemon(props) {

  return <Card>
    <Name>{props.name}</Name>
    <Image src={props.image} alt={props.alt} />
    <ButtonGroup>
      <button onClick={props.onClickAdd}>Adicionar</button>
      <button onclick={props.onClickDetails}>Detalhes</button>
    </ButtonGroup>
  </Card>
}

export default CardPokemon