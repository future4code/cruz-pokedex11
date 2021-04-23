import React from 'react';
import { goToPokedex, goBack, goToHome } from '../Router/coordinator';
import { useHistory } from 'react-router';
import icon from '../img/icon.png'
import pokemon from '../img/pokemon.webp'
import { HomeIcon, Button, ContainerHeader} from '../Style/HeaderStyles'

export function Header() {
    const history = useHistory()

    const buttonNav = () => {
        switch (history.location.pathname) {
            case '/':
                return (
                    <div>

                        <Button onClick={() => goToPokedex(history)}>Ver Pokedex</Button>

                    </div>
                )

            default:
                return (
                    <div>
                        <Button onClick={() => goBack(history)}>Voltar</Button>
                    </div>
                )
        }

    }

    return (
        <ContainerHeader>

            <HomeIcon src={icon} onClick={() => goToHome(history)}></HomeIcon>
            <HomeIcon pokemon src={pokemon}></HomeIcon>
            {buttonNav()}

        </ContainerHeader>
    )
}

export default Header