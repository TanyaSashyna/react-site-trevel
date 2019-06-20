import React from 'react';

import "./caption.scss";

import ImgComponent from '../imgComponent/ImgComponent';

export default class Caption extends React.Component {
    render(){
        return(
            <div className="main">
				<div className='from-to'>
					<div className="caption-wrap">
						<h2 className="caption">Пассажирские перевозки</h2>
						<p className="legend">
							Автобусные пассажирские перевозки нашим комфортабельным автобусом доставят вам удовольствие от поездки.
							Время в пути пройдет незаметно благодаря уютной обстановке салона и приветливому водителю.
						</p>
					</div>
					<div className="caption-img">
						<ImgComponent src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"/>
					</div>
                </div>
            </div>
        )
    }
}