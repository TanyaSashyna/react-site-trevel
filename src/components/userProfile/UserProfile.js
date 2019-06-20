import React from 'react';

import "./user-profile.scss";


export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="user-profile">
                    <div className="user-avatar">
                        <div className="avatar" id="avatar"></div>
                    </div>
                    <div className="info">
                        <div className="item">
                            <label>Имя: </label>
                            <span id="firstName">firstName</span>
                        </div>
                        <div className="item">
                            <label>Фамилия: </label>
                            <span id="lastName">lastName</span>
                        </div>
                        <div className="item">
                            <label>Телефон: </label>
                            <span id="phone">0990000000</span>
                        </div>
                        <div className="item">
                            <label>Город: </label>
                            <span id="city">Харьков</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}