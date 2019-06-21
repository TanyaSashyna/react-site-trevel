import React from 'react';

import "./contact.scss";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="picture">
                    <img src="https://panch.com.ua/files/images/units/covers/big/panch20.jpg" alt="bus-picture"/>
                    /* сделать картинку на фон */
                    <h1 className="caption-page">Контакты</h1>
                </div>
            
                <div className="contact-wrap">
                    <div className='contact-wrap__case'>
                        <div className='phone'>
                            <div className="contacts-name">
                                <i className="fas fa-mobile-alt"></i> Телефон:
                            </div>
                            <div className="contact-phone">
                                (099) 000 00 00
                            </div>
                        </div>
                        <div className="email">
                            <div className="contacts-name">
                                <i className="fas fa-envelope"></i> E-mail:
                            </div>
                            <div className="contact-schedule">
                                travel@gmail.com
                            </div>
                        </div>
                    </div>
        
                    <div className='contact-wrap__case'>
                        <div className='address'>
                            <div className="contacts-name">
                                <i className="fas fa-map-marker-alt"></i> Адрес:
                            </div>
                            <div className="contact-address">
                                г. Харьков, пр. Московский, 257<br/>метро "Дворец Спорта"
                            </div>
                        </div>
                        <div className="time-work">
                            <div className="contacts-name">
                                <i className="fas fa-clock"></i> Время работы офиса:
                            </div>
                            <div className="contact-schedule">
                                09:00 - 19:00 Пн-Вс
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="map">added google map</div>
            </div>
        )
    }
}
