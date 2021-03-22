import React from 'react';

const UserArea_orders = () => {
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
                            <table className="userArea__main-table">
                                <tr>
                                    <th colSpan="2">Модель машины</th>
                                    <th>Цена за день</th>
                                    <th>Дата аренды</th>
                                    <th>Количество дней</th>
                                    <th>Итого</th>
                                </tr>
                                <tr>
                                    <td><img src="data:image/jpeg;base64,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"/></td>
                                    <td>машина</td>
                                    <td>2500</td>
                                    <td>25.02.2021</td>
                                    <td>1</td>
                                    <td>2500</td>
                                </tr>
                                <tr>
                                    <td><img src="https://media.ffclub.ru/th/3a5b80339c2038b134e0c1b8e57986e8.jpg"/></td>
                                    <td>ПМашина</td>
                                    <td>3000</td>
                                    <td>25.02.2021</td>
                                    <td>1</td>
                                    <td>3000</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default UserArea_orders;