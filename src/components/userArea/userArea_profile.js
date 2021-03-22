import React from 'react';

const UserArea_profile = () => {
    return (
        <>
            <section className="userArea">
                <div className="container">
                    <div className="userArea__wrapper">
                        <nav className="userArea__nav">
                            <div className="userArea__link"><a href="#">Мой профиль</a></div>

                            <div className="userArea__link"><a href="#">Мои заказы</a></div>

                            <div className="userArea__link"><a href="#">Настройки</a></div>
                        </nav>
                        <div className="userArea__main">
                            <div className="u   serArea__main-name">
                                <h2>Личные данные</h2>
                                <p>Имя и фамилия</p>
                                <input value="Иванов Иван Иванович" type="text"/>
                            </div>
                            <div className="userArea__contacts">
                                <p>Контактный телефон</p> <input value="8-800-555-35-35"  type="text"/>
                                <p>Электронная почта</p> <input  value="luchePozvonit@ChemUkogo-toZani.mat" type="text"/>
                            </div>
                            <div className="userArea__main-data">
                                <h2>Данные и оплата</h2>
                                <p>Предпочтительный способ оплаты</p>
                                <select>
                                    <option>Банковской картой</option>
                                    <option>Наличным расчетом</option>
                                    <option>Онлайн-платеж</option>
                                </select>
                                <p>Адрес доставки</p> <input value="Куда-нибудь" type="text"/>
                            </div>
                            <button className="button button__userArea">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default UserArea_profile;