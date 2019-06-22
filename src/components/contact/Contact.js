import React from 'react';

import "./contact.scss";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="picture">
                    <div className="caption-page">
                        <div className="container">
                            <h1>Контакты</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="contact-wrap">
                        <div className='contact-item'>
                            <div className="contact-name">
                                <i className="fas fa-mobile-alt"></i> Телефон:
                            </div>
                            <div className="contact-schedule">
                                (099) 000 00 00
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-name">
                                <i className="fas fa-envelope"></i> E-mail:
                            </div>
                            <div className="contact-schedule">
                                travel@gmail.com
                            </div>
                        </div>
        
                        <div className='contact-item'>
                            <div className="contact-name">
                                <i className="fas fa-map-marker-alt"></i> Адрес:
                            </div>
                            <div className="contact-schedule">
                                г. Харьков, Павловская площадь, 6,<br />метро "Конституции"
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-name">
                                <i className="fas fa-clock"></i> Время работы офиса:
                            </div>
                            <div className="contact-schedule">
                                09:00 - 19:00 Пн-Вс
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.2764124482183!2d36.230444996418456!3d49.987426988595324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f6bbf24153%3A0x1e01a858b65463!2zQS1MZXZlbCBJVC3QutGD0YDRgdGLINCyINCl0LDRgNGM0LrQvtCy0LUsINC60YPRgNGB0Ysg0L_RgNC-0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8g0YEg0LPQsNGA0LDQvdGC0LjRgNC-0LLQsNC90L3Ri9C8INGC0YDRg9C00L7Rg9GB0YLRgNC-0LnRgdGC0LLQvtC8!5e0!3m2!1sru!2sua!4v1561213577946!5m2!1sru!2sua"
                        width="100%"
                        height="400"
                        frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        )
    }
}
