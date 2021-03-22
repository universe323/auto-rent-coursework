import React from 'react';

const SignUp = () => {
    return (
        <>
            <div className="overlay">
                <div className="modal" id="signUp">
                    <div className="modal__close">&times;</div>
                    <div className="modal__subtitle">Регистрация пользователя</div>
                    <div className="modal__descr">Введите данные, необходимые для регистрации:</div>
                    <form className="signUp__form" action="#">
                        <input name="name" required placeholder="Введите Ваше имя" type="text"/>
                        <input name="name" required placeholder="Введите Ваш логин" type="text"/>
                        <input name="email" required placeholder="Ваш E-mail" type="email"/>
                        <input name="password" required placeholder="Введите Ваш пароль" type="password"/>
                        <button className="button button_submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SignUp;

// https://html5css.ru/howto/howto_js_password_validation.php