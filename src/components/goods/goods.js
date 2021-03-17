import React, {useState} from 'react';

import CatalogService from '../../services/catalogService'

const Goods = () => {

    const catalogService = new CatalogService();

    const [data, updateData] = useState('');

    const renderItem = (subtitle, descr, price, carImg) => {


        return (
            <div className="goods__wrapper">
                <div className="goods__item">
                    <div className="goods__img-1"/>
                    <div className="goods__item-subtitle">{subtitle}</div>
                    <hr/>
                    <div className="goods__item-descr">{descr}</div>
                    <div className="goods__item-price">{price} руб</div>
                    <button className="button button__price">АРЕНДОВАТЬ</button>
                </div>
            </div>
        );
    }

    const renderItems = () => {
        let data;

        catalogService.getCatalog().then(res => {
            data = res;
        });


    };


    return (
        <section className="goods">
            <div className="container">
                <h2 className="goods__title">ПРОКАТ АВТО</h2>
                {renderItem(
                    "HYUNDAI GENESIS",
                    "2016 | Автомат | 270км/ч | Пробег: 25 000 км | Расход: 9л/100",
                    "8000",
                    null)}
            </div>

            <div className="special">
                <div className="special__block">
                    <div className="special__block-subtitle">Не нашли что искали?</div>
                    <h2 className="special__block-title">НУЖНО ЧТО-ТО <span>ОСОБЕННОЕ?</span></h2>
                    <div className="special__block-descr">Позвоните нам или оставьте заявку и мы вам поможем выбрать то
                        что вам нужно.
                    </div>
                    <button className="button button__special">ОСТАВИТЬ ЗАЯВКУ</button>
                </div>
            </div>
        </section>
    );
}

export default Goods;