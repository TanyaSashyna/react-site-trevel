import React from 'react';

import "./modal-form.scss";

export default class ModalForm extends React.Component {

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