import React from 'react';
import { connect } from "react-redux";

import { onChangeValue, createPost } from "../../actions/form";

import "./form-order.scss";

import ModalForm from '../modalForm/ModalForm';
import Button from '../button/Button';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

export class FormOrder extends React.Component {

    render() {
        const {
            showModalForm,
            onChangeValue,
            createPost,
            userInfo,
            dataForm,
            showError,
            disabled
        } = this.props;
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
                                id={el.id}
                            />
                            <ErrorMessage text={el.errorText} showError={showError[el.id]} />
                        </div>
                    )}
                    <div className="btn-block">
                        <Button
                            text="Заказать билет"
                            type="button"
                            className="btn"
                            id="buy-ticket"
                            onClick={createPost.bind(null, userInfo)}
                            disabled={disabled}
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
        dataForm: state.transfer.dataForm,
        showError: state.transfer.showError,
        disabled: state.transfer.disabled
    };
};

export default connect(
    mapStateToProps,
    { onChangeValue, createPost }
)(FormOrder);
