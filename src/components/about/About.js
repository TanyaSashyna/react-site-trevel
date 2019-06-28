import React from 'react';
import { connect } from "react-redux";

import "./about.scss";

import ImgComponent from '../imgComponent/ImgComponent';

/*const galleryPhoto = [
	{
		img: 'https://cdn.pixabay.com/photo/2017/08/05/12/47/auto-2583303_960_720.jpg',
		alt: 'bus1',
		id: 1
	},
	{
		img: 'https://cdn.pixabay.com/photo/2017/08/05/12/36/auto-2583230_960_720.jpg',
		alt: 'bus2',
		id: 2
	},
	{
		img: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/car-1284040_960_720.jpg',
		alt: 'bus3',
		id: 3
	},
	{
		img: 'https://cdn.pixabay.com/photo/2017/08/05/12/45/auto-2583292_960_720.jpg',
		alt: 'bus4',
		id: 4
	},
	{
		img: 'https://cdn.pixabay.com/photo/2017/08/05/12/46/auto-2583297_960_720.jpg',
		alt: 'bus5',
		id: 5
	},
	{
		img: 'https://cdn.pixabay.com/photo/2017/08/05/12/42/auto-2583266_960_720.jpg',
		alt: 'bus6',
		id: 6
	}
]*/

export default class About extends React.Component {
    render() {
	const {galleryPhoto} = this.props;
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
                    <h3>Мы сделаем Ваши переезды комфортными</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        galleryPhoto: state.addGalleryPhoto.galleryPhoto
    };
};

export default connect(
    mapStateToProps
)(About);
