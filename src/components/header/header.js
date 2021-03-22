import React from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <>
            <header className="header">

                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__links">
                            <a href="tel:78008888888" className="header__phone">
                                <FontAwesomeIcon icon={faPhoneAlt}/>
                                +7 (800) 888-88-88</a>
                            <a href="#" className="header__email">
                                <FontAwesomeIcon icon={faEnvelope}/>auto@mail.ru
                            </a>
                        </div>
                        <div className="header__primetime">
                            <FontAwesomeIcon icon={faClock}/>
                            Режим работы: с
                            09:00
                            до 21:00
                        </div>

                    </div>

                </div>

            </header>
            <nav className="nav">
                <div className="container">
                    <ul className="nav__menu">
                        <div className="nav__menu-logo"><a href=""><span>Auto-</span>Rent</a></div>
                        <li className="nav__menu-item"><a href="#main" className="nav__menu-link active">Главная</a></li>
                        <li className="nav__menu-item"><a href="#advantages" className="nav__menu-link active">преимущества</a></li>
                        <li className="nav__menu-item"><a href="#rent" className="nav__menu-link active">Прокат Авто</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link active">FAQ</a></li>
                        <li className="nav__menu-item"><a href="#feed" className="nav__menu-link active">Отзывы</a></li>
                        <li className="nav__menu-item"><a href="#contacts" className="nav__menu-link active">Контакты</a></li>
                    </ul>
                </div>
                <div className="nav__auth">
                    <button className="button button__auth-in">Войти</button>
                    <button className="button button__auth-up">Регистрация</button>
                </div>
            </nav>
        </>
    );
}

export default Header;