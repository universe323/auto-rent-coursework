import React from 'react';
import {Link as ScrollLink} from 'react-scroll'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faClock, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const renderScrollLink = (tag, value) => {
    return (
        <li className="nav__menu-item">
            <ScrollLink
                className ="nav__menu-link"
                activeClass="active"
                to={tag}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={50}>
                {value}
            </ScrollLink>
        </li>
    );
}

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
                        <div className="nav__menu-logo">
                            <a href=""><span>Auto-</span>Rent</a></div>
                        {renderScrollLink("main", "Главная")}
                        {renderScrollLink("advantages", "преимущества")}
                        {renderScrollLink("rent", "Прокат Авто")}
                        {renderScrollLink("faq", "FAQ")}
                        {renderScrollLink("feed", "Отзывы")}
                        {renderScrollLink("contacts", "Контакты")}
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