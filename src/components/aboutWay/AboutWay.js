import React from 'react';
import { connect } from "react-redux";

import { orderForm } from "../../actions/open-order-form";

import "./about-way.scss";

import ImgComponent from '../imgComponent/ImgComponent';
import Button from '../button/Button';

export class AboutWay extends React.Component {
    render() {
        const { openOrderForm, orderForm } = this.props;

        return(
            <div className="way-content">
				<h1 className="way-head">
					Харьков - Кириловка
				</h1>
                <div className="way-img">
                    <ImgComponent src="https://yastrub-tour.com.ua/images/fedot.jpg"/>
				</div>
				<div className="way-info">
					<h4>Автобусные рейсы: <span className="when">Ежедневно</span></h4>
					<div className="way-time">Время отправления: <span className="time">22:00</span></div>
					<div className="way-where">Место отправления: <span className="where">ЖД вокзал</span></div>
					<div className="arrival">Прибытие: <span className="city-time">Кириловка 07:00</span></div>
					<div className="price">400 грн</div>
                    { !openOrderForm &&
                        <div className="btn-wrap">
                            <Button
                                text='Заказать'
                                type="button"
                                className='btn'
                                id='buy-btn'
                                onClick={orderForm} />
                        </div>
                    }
				</div>
			</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        openOrderForm: state.orderForm.openOrderForm
    };
};

export default connect(
    mapStateToProps,
    { orderForm }
)(AboutWay);