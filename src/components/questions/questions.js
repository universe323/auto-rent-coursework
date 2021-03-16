import React from 'react';

const Questions = () => {
    return (
        <>
            <div className="accordion"> АККОРДИОН ЗДЕСЬ ТОЖЕ НЕ ОСОБО ПОЛУЧАЕТСЯ
                <div className="container">
                    <div className="accordion__wrapper">
                        <div className="accordion__column">
                            <img className="accordion__img-f" src="img/special/spec_1.jpg" alt=""
                                 className="accordion__img"/>
                                <img className="accordion__img-s" src="img/special/spec_2.jpg" alt=""
                                     className="accordion__img"/>
                        </div>
                        <div className="accordion__questions">
                            <button className="accordion__item">Вопрос 1</button>
                            <div className="accordion__panel">
                                <p>Ответ на Вопрос 1...</p>
                            </div>
                            <button className="accordion__item">Вопрос 2</button>
                            <div className="accordion__panel">
                                <p>Ответ на Вопрос 2...</p>
                            </div>
                            <button className="accordion__item">Вопрос 3</button>
                            <div className="accordion__panel">
                                <p>Ответ на Вопрос 3 ...</p>
                            </div>
                            <button className="accordion__item">Вопрос 4</button>
                            <div className="accordion__panel">
                                <p>Ответ на Вопрос 4...</p>
                            </div>
                            <button className="accordion__item">Вопрос 5</button>
                            <div className="accordion__panel">
                                <p>Ответ на Вопрос 5 ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;