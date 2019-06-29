import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./about.scss";

import CaptionPicture from '../caption-picture/CaptionPicture';
import ImgComponent from '../imgComponent/ImgComponent';

export class About extends React.Component {
    render() {
	const {galleryPhoto} = this.props;
        return (
            <div className="main">
                <CaptionPicture text='О нас'/>

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
				<div className="gallery">
					{
						galleryPhoto.map(el=>
							<div className="item" key={el.id}>
								<ImgComponent src={el.img} alt={el.alt}/>
							</div>
						)
					}
				</div>
                <div className="lozung">
                    <div className="lozung-bg">
                        <h3>Мы сделаем Ваши переезды комфортными</h3>
                        <Link to="/transfer" className="btn">Заказать</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        galleryPhoto: state.transfer.galleryPhoto
    };
};

export default connect(
    mapStateToProps
)(About);
