import React from 'react';
import { goToPokedex, goBack, goToHome } from '../Router/coordinator';
import { useHistory } from 'react-router';
import icon from '../img/icon.png'


function Header() {
    const history = useHistory()

    const buttonNav = () => {
        switch (history.location.pathname) {
            case '/':
                return (
                    <div>
                        <button onClick={() => goToPokedex(history)}>Ver pokédex</button>
                    </div>
                )

            default:
                return (
                    <div>
                        <button onClick={() => goBack(history)}>Voltar</button>
                    </div>
                )
        }

    }

    return (
        <div>

            <img src={icon} onClick={() => goToHome(history)}></img>
            {buttonNav()}

        </div>
    )
}

export default Header