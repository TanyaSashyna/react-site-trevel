import React from 'react';
import { Link } from "react-router-dom";

export default class CaptionPage extends React.Component {

    render() {
        return (
            <div className="caption-page">
                <div className="container home-caption">
                    <h2>Пассажирские перевозки по Украине</h2>
                    <Link to="/transfer" className="btn">Заказать</Link>
                </div>
            </div>
        )
    }
}
