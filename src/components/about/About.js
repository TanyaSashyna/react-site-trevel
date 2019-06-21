import React from 'react';

import "./about.scss";

export default class About extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="picture">
                    <img src="https://panch.com.ua/files/images/units/covers/big/panch20.jpg" alt="bus-picture"/>
                    /* сделать картинку на фон */
                    <h1 className="caption-page">О нас</h1>
                </div>
                <div className="caption-wrap">
                    <h2 className="caption">Чем мы занимаемся</h2>
                    <p className="legend">
                        Пассажирские перевозки по Украина комфортабельными автобусами и микроавтобусами.
                        Стоимость каждой поездки рассчитывается индивидуально.
                        Для постоянных клиентов существует система скидок.
                    </p>
                </div>
                <div className="lozung">Мы сделаем Ваши переезды комфортными</div>
                <div className="picture">
                    <img src="https://panch.com.ua/files/images/units/covers/big/panch20.jpg" alt="bus-picture"/>
                </div>
            </div>
        )
    }
}
