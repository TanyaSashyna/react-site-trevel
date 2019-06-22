import React from 'react';

import "./footer.scss";
import {Link} from "react-router-dom";

const menu = [
    { id: 1, path: "/", text:'Главная'},
    { id: 2, path: "/about", text:'О нас' },
    { id: 3, path: "/transfer", text:'Трансфер' },
    { id: 4, path: "/contact", text:'Контакты' }
];

export default class Main extends React.Component {
    render() {
        return (
            <footer>
                <div className='container footer-wrap'>
                    <div className="footer-wrap__case nav-list">
                        <ul>
                            {
                                menu.map(el =>
                                    <li key={el.id}>
                                        <Link to={el.path} className='link'>
                                            {el.text}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='footer-wrap__case'>
                        <div className='phone'>
                            <div className="contacts-name">
                                <i className="fas fa-mobile-alt"></i> Телефон:
                            </div>
                            <div className="footer-phone">
                                (099) 000 00 00
                            </div>
                        </div>
                        <div className="email">
                            <div className="contacts-name">
                                <i className="fas fa-envelope"></i> E-mail:
                            </div>
                            <div className="footer-schedule">
                                travel@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='footer-wrap__case'>
                        <div className='address'>
                            <div className="contacts-name">
                                <i className="fas fa-map-marker-alt"></i> Адрес:
                            </div>
                            <div className="footer-contacts">
                                г. Харьков, Павловская площадь, 6,<br />метро "Конституции"
                            </div>
                        </div>
                        <div className="time-work">
                            <div className="contacts-name">
                                <i className="fas fa-clock"></i> Время работы офиса:
                            </div>
                            <div className="footer-schedule">
                                09:00 - 19:00 Пн-Вс
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}