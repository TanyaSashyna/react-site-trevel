import React from 'react';
import { connect } from "react-redux";

import { modalForm } from "../../actions/form";
import { resetValueSelect } from "../../actions/from-where-selects";

import "./modal-form.scss";

export class ModalForm extends React.Component {
    componentDidMount() {
        const { modalForm, resetValueSelect } = this.props;

        setTimeout(function () {
            modalForm();
            resetValueSelect()
        }, 5000)
    }

    render() {
        return (
            <div className='module'>
                <div className="module-content">
                    <div className="module-body">
                        <p>Спасибо за сотрудничество с Нами.</p>
                        <p>Ваши заказ принят.</p>
                        <p>Наш оператор с Вами свяжется.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { modalForm, resetValueSelect }
)(ModalForm);