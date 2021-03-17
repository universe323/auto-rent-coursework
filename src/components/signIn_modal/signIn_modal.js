import React from 'react';

const SignIn = () => {
    return (
        <>
            <div className="overlay">
                <div className="modal" id="signIn">
                    <div className="modal__close">&times;</div>
                    <div className="modal__subtitle">Вход в личный кабинет</div>
                    <div className="modal__descr">Введите Ваши данные:</div>
                    <form className="signIn__form" action="#">
                        <input name="name" required placeholder="Введите Ваш логин или e-mail" type="text"/>
                        <input name="password" required placeholder="Введите Ваш пароль" type="password"/>
                        <button className="button button_submit">Войти</button>
                    </form>
                </div>
            </div>
        </>
    )
};
export default SignIn;