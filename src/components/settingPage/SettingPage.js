import React from 'react';

import "./setting-page.scss";

import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Button from '../button/Button';

const dataFormSettings = [
    {
        labelPlaceholder: 'Имя',
        type: 'text',
        name: 'firstName',
        errorText: 'Введите имя',
        id: 1
    },
    {
        labelPlaceholder: 'Фамилия',
        type: 'text',
        name: 'lastName',
        errorText: 'Введите фамилию',
        id: 2
    },
    {
        labelPlaceholder: 'Телефон',
        type: 'phone',
        name: 'phone',
        errorText: 'Введите номер телефона',
        id: 3
    },
    {
        labelPlaceholder: 'Город',
        type: 'text',
        name: 'city',
        errorText: 'Введите город',
        id: 4
    }
]

export default class SettingPage extends React.Component {
    onChangeValue(e) {
        console.log(e.target.value)
    }

    saveOrderForm(e) {
        console.log('saveOrderForm')
    }

    render() {
        return (
            <div className="main">
                <form>
                    <div className="user-avatar">
                        <label htmlFor="avatarFile" className="avatar" id="avatar-img"></label>
                        <input type="file" name="avatar" id="avatarFile" className="input-avatar"/>
                    </div>
                    <div className="info">
                        {dataFormSettings.map(el =>
                            <div className="form-group" key={el.id}>
                                <label className="label-input">{el.labelPlaceholder}</label>
                                <Input type={el.type} name={el.name} placeholder={el.labelPlaceholder} onChange={this.onChangeValue} />
                                <ErrorMessage text={el.errorText} />
                            </div>
                        )}
                        <div className="btn-block">
                            <Button
                                text="Сохранить"
                                type="button"
                                className="btn"
                                id="save"
                                onClick={this.saveOrderForm}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
