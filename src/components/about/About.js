import React from 'react';

import "./about.scss";

export default class About extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="picture">
                    <div className="caption-page">
                        <div className="container">
                            <h1>О нас</h1>
                        </div>
                    </div>
                </div>
                <div className="about-wrap">
                    <div className="container">
                        <h2>Чем мы занимаемся</h2>
                        <p>
                            Пассажирские перевозки по Украина комфортабельными автобусами и микроавтобусами.
                            Стоимость каждой поездки рассчитывается индивидуально.
                        </p>
                        <p>Для постоянных клиентов существует система скидок.</p>
                    </div>
                </div>
               
                <div className="lozung">
                    <h3>Мы сделаем Ваши переезды комфортными</h3>
                </div>
            </div>
        )
    }
}
