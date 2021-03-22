import React from 'react';

const UserArea_settings = () => {
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
                            <div className="userArea__main-name">
                                <h2>Изменить пароль</h2>
                                <p>Текущий пароль</p>
                                <input value="Иванов Иван Иванович" type="password"/>
                            </div>
                            <div className="userArea__contacts">
                                <p>Новый пароль</p>
                                <input  type="password"/>
                                <label><input type="checkbox" className="password-checkbox"/> Показать пароль</label>
                                <p>Повторите пароль</p>
                                <input  type="password"/>
                                <label><input type="checkbox" className="password-checkbox"/> Показать пароль</label>
                            </div>
                            <button className="button button__userArea">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default UserArea_settings;