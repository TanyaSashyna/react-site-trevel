import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./sidebar.scss";

import Button from '../button/Button';

export class Sidebar extends React.Component {
    logout(e) {
        console.log('logout')
    }

    render() {
        const { showSidebarItem } = this.props;

        return(
            <div className={`sidebar ${ showSidebarItem? 'open' : 'close' }`} id="sidebar">
                <div className="user-info">
                    <div className="avatar"></div>
                    <p className="userName">User Name</p>
                </div>

                <div className="nav-list">
                    <ul>
                        <li className="link">
                            <Link to="/profile" className="profile">Профиль</Link>
                        </li>
                        <li className="link">
                            <span>Пассажирские перевозки</span>
                            <ul className="submenu">
                                <li>
                                    <Link to="/taxi">Такси</Link>
                                </li>
                                <li>
                                    <Link to="/transfer" id="intercity">Междугородние</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="link">
                            <Link to="/history">История</Link>
                        </li>
                        <li className="link">
                            <Link to="/sale">Скидки</Link>
                        </li>
                        <li className="link">
                            <Link to="/settings" className="settings">Настройки</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="logout-block">
                    <Button type="button" text='Выйти' className="btn-logout" onClick={this.logout} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showSidebarItem: state.burgerBtn.showSidebar
    };
};

export default connect(
    mapStateToProps
)(Sidebar);