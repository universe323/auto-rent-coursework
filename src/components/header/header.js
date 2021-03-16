import React from 'react';

import MailIcon from '../../img/icons/contacts/mail.eps';
import PhoneIcon from '../../img/icons/contacts/phone.svg';


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__links">
                            <a href="tel:78008888888" className="header__phone">
                                <img src={PhoneIcon} alt=""/>
                                +7 (800) 888-88-88</a>
                            <a href="#" className="header__email">
                                <img src={MailIcon} alt=""/>auto@mail.ru
                            </a>
                        </div>
                        <div className="header__primetime">
                            <img src={MailIcon} alt=""/>
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
                        <div className="nav__menu-logo"><a href="#"><span>Auto-</span>Rent</a></div>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">Главная</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">преимущества</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">Прокат Авто</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">FAQ</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">Отзывы</a></li>
                        <li className="nav__menu-item"><a href="#" className="nav__menu-link">Контакты</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;