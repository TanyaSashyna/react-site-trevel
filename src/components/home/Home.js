import React from 'react';
import { Link } from "react-router-dom";

import "./home.scss";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            regularRoutes: ['Харьков - Кириловка', 'Харьков - Скадовск', 'Харьков - Лазурное']
        }
    }
    render() {
        const { regularRoutes } = this.state;
        return (
            <div className="main">
                <div className="picture">
                    <div className="caption-page">
                        <div className="container home-caption">
                            <h1>Пассажирские перевозки по Украине</h1>
                            <Link to="/transfer" className="btn">
                                Заказать
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="home-about">
                    <div className="container">
                        <p>
                            Автобусные пассажирские перевозки нашим комфортабельным автобусом доставят
                            вам удовольствие от поездки. Время в пути пройдет незаметно благодаря
                            уютной обстановке салона и приветливому водителю.
                        </p>
                    </div>
                </div>

                <div className="home-routes">
                    <div className="container">
                        <h2>Регулярные маршруты</h2>
                        <ul>
                            {regularRoutes.map(
                                (route, ind) => <li key={ind}>{route}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
