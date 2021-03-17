import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__title">КОНТАКТЫ</h2>
                <div className="footer__block">
                    <div className="footer__contacts"> <FontAwesomeIcon icon={faPhoneAlt}/>
                        <div className="div">+ 7 (888) 888-88-88 <br/> auto@mail.ru</div>
                    </div>
                    <div className="footer__contacts"><FontAwesomeIcon icon={faClock}/>Пн-Пт: с 09:00 до 21:00 <br/> Сб-Вс: выходной</div>
                    <div className="footer__contacts"><FontAwesomeIcon icon={faMapMarkerAlt}/>Росиия, Санкт-Петербург, <br/> пр-т Московский 99</div>
                </div>

            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.3432624814493!2d30.316370515499194!3d59.89275728551247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696306ecd7b963b%3A0x21c97a01b796872b!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0L_RgC3Rgi4sIDk5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTYwODQ!5e0!3m2!1sru!2sua!4v1615588748862!5m2!1sru!2sua"
                width="100%" height="600" allowFullScreen=""  loading="lazy"/>
        </footer>
    );
}

export default Footer;