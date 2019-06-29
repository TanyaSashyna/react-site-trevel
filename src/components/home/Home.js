import React from 'react';

import "./home.scss";

import CaptionPage from './CaptionPage';
import Caption from '../caption/Caption';
import ImgComponent from '../imgComponent/ImgComponent';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            regularRoutes: [
                {
                    city: 'Харьков - Кирилловка',
                    image: 'https://www.stihi.ru/pics/2014/04/29/11073.jpg'
                },
                {
                    city: 'Харьков - Скадовск',
                    image: 'https://lh3.googleusercontent.com/-eFExpz4uZ4s/V31johQvXTI/AAAAAAAALNE/4_gXXdNmnXk9yx_lWGwbEn37eM7y5-Q8wCCo/s640/IMG_1188.JPG'
                },
                {
                    city: 'Харьков - Лазурное',
                    image: 'http://otdyhaem.com.ua/files/images/mys-dzharylgachskij.jpg'
                }
            ]
        }
    }
    render() {
        const { regularRoutes } = this.state;
        return (
            <div className="main">
                <div className="picture">
                    <CaptionPage/>
                </div>
                
                <Caption />

                <div className="home-routes">
                    <h2>Регулярные маршруты</h2>
                    <ul>
                        {regularRoutes.map(
                            (route, ind) => <li key={ind}>
                                <h4>{route.city}</h4>
                                <ImgComponent src={route.image} />
                            </li>
                        )}
                    </ul>
                </div>

                <div className='home-order'>
                    <CaptionPage />
                </div>
            </div>
        )
    }
}
