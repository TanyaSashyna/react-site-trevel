import React from 'react';
import { connect } from "react-redux";

import "./footer.scss";
import {Link} from "react-router-dom";
import ContactItem from "../contact/contact-item";

export class Footer extends React.Component {
    render() {
        const {menu} = this.props;
        return (
            <footer>
                <div className='container footer-wrap'>
                    <div className="footer-wrap__case nav-list">
                        <ul>
                            {menu.map(el =>
                                <li key={el.id}>
                                    <Link to={el.path} className='link'>
                                        {el.text}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='footer-wrap__case'>
                        <ContactItem
                            classIcon="fas fa-mobile-alt"
                            contactName="Телефон"
                            scheduleText="(099) 000 00 00"
                        />
                        <ContactItem
                            classIcon="fas fa-envelope"
                            contactName="E-mail"
                            scheduleText="travel@gmail.com"
                        />
                    </div>
                    <div className='footer-wrap__case'>
                        <ContactItem
                            classIcon="fas fa-map-marker-alt"
                            contactName="Адрес"
                            scheduleText="г. Харьков, Павловская площадь, д.6, метро пл.Конституции"
                        />
                        <ContactItem
                            classIcon="fas fa-clock"
                            contactName="Время работы офиса"
                            scheduleText="09:00 - 19:00 Пн-Вс"
                        />
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = state => {
    return {
        menu: state.transfer.menu
    };
};

export default connect(
    mapStateToProps
)(Footer);
