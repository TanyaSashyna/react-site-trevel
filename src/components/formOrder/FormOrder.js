import React from 'react';
import { connect } from "react-redux";

import { modalForm, onChangeValue, createPost } from "../../actions/form";

import "./form-order.scss";

import ModalForm from '../modalForm/ModalForm';
import Button from '../button/Button';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

/*const dataForm = [
    {
        type: 'text',
        name: 'firstName',
        placeholder: 'Имя',
        errorText: 'Введите имя',
        labelText: 'Имя',
        id: 1
    },
     {
        type: 'text',
        name: 'lastName',
        placeholder: 'Фамилия',
        errorText: 'Введите имя',
        labelText: 'Фамилия',
        id: 2
    },
    {
        type: 'phone',
        name: 'phone',
        placeholder: 'Телефон',
        errorText: 'Введите номер телефона',
        labelText: 'Телефон',
        id: 3
    },
    {
        type: 'date',
        name: 'date',
        placeholder: 'Дата отправления',
        errorText: 'Введите дату',
        className: 'date',
        labelText: 'Дата',
        id: 4
    },
    {
        type: 'text',
        name: 'number',
        placeholder: '0',
        errorText: 'Не корректное количество мест',
        labelText: 'Количество мест',
        id: 5
    }
];*/

export class FormOrder extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { modalForm } = this.props;

        if( nextProps.showModalForm ) {
            setTimeout( function() {
                    modalForm()
                }, 5000
            )
        }

        return true
    }

    onChangeValue(e) {
        console.log(e.target.name, e.target.value)
    }

    render() {
        const { showModalForm, onChangeValue, createPost, userInfo, dataForm } = this.props;
        //console.log(userInfo);
        return (
            <>
                <form>
                    {dataForm.map(el => 
                        <div className="form-group" key={el.id}>
                            <label className="label-input">{el.labelText}</label>
                            <Input
                                type={el.type}
                                name={el.name}
                                placeholder={el.placeholder}
                                onChange={onChangeValue}
                            />
                            <ErrorMessage text={el.errorText} />
                        </div>
                    )}
                    <div className="btn-block">
                        <Button
                            text="Заказать билет"
                            type="button"
                            className="btn"
                            id="buy-ticket"
                            onClick={createPost.bind(null, userInfo) }
                        />
                    </div>
                </form>
                {showModalForm && <ModalForm />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        showModalForm: state.transfer.showModalForm,
        userInfo: state.transfer.userInfo,
        dataForm: state.transfer.dataForm
    };
};

export default connect(
    mapStateToProps,
    { modalForm, onChangeValue, createPost }
)(FormOrder);
