import React from 'react';
import { connect } from "react-redux";

import { orderForm } from "../../actions/open-order-form";

import "./about-way.scss";

import ImgComponent from '../imgComponent/ImgComponent';
import Button from '../button/Button';

export class AboutWay extends React.Component {
    render() {
        const { openOrderForm, orderForm, fromWhereVal, whereVal, aboutWay } = this.props;
        //console.log(aboutWay);

        return(
            <div className="way-content">
				<h1 className="way-head">
                    {`${fromWhereVal} - ${whereVal}`}
				</h1>
                <div className="way-img">
                    <ImgComponent src="https://yastrub-tour.com.ua/images/fedot.jpg"/>
				</div>
				<div className="way-info">
                    <h4>Автобусные рейсы: <span className="when">{aboutWay.when}</span></h4>
                    <div className="way-time">Время отправления: <span className="time">{aboutWay.departureTime}</span></div>
                    <div className="way-where">Место отправления: <span className="where">{aboutWay.departurePoint}</span></div>
                    <div className="arrival">Прибытие: <span className="city-time">{`${aboutWay.placeArrival} ${aboutWay.arrivalTime}`}</span></div>
                    <div className="price">{`${aboutWay.cost}грн`}</div>
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
        openOrderForm: state.transfer.openOrderForm,
        fromWhereVal: state.transfer.fromWhereVal,
        whereVal: state.transfer.whereVal,
        aboutWay: state.transfer.aboutWay
    };
};

export default connect(
    mapStateToProps,
    { orderForm }
)(AboutWay);