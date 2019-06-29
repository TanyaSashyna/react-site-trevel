import React from 'react';
import { connect } from "react-redux";

import { fromWhereSelect, whereSelect, getPosts } from "../../actions/from-where-selects";

import "./transfer.scss";

import CaptionPicture from '../caption-picture/CaptionPicture';
import SelectsBlock from '../selects-block/SelectsBlock';
import AboutWay from '../aboutWay/AboutWay';
import FormOrder from '../formOrder/FormOrder';

export class Transfer extends React.Component {
    componentDidUpdate() {
        const { whereVal, getPosts } = this.props;

        whereVal !== '' && getPosts();
    }

    render() {
        const {
            openOrderForm,
            fromWhereArr,
            whereArrOne,
            whereArrTwo,
            showSelect,
            fromWhereSelect,
            whereSelect,
            fromWhereVal,
            showAboutWay,
            valueOne,
            valueTwo
        } = this.props;

        return (
            <div className="main">
                <CaptionPicture text='Заказать трансфер' />
                
                <div className="select-wrap">
                    <SelectsBlock
                        name="from-where"
                        value={valueOne}
                        fromWhere={fromWhereArr}
                        onChange={fromWhereSelect}
                        text="Откуда"
                    />
                    {
                        showSelect && <SelectsBlock
                            name="where"
                            value={valueTwo}
                            fromWhere={fromWhereVal !== 'Харьков' ? whereArrOne : whereArrTwo}
                            onChange={whereSelect}
                            text="Куда"
                        />
                    }
                </div>
                {showAboutWay && <AboutWay />}
                {openOrderForm && <FormOrder />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        openOrderForm: state.transfer.openOrderForm,
        fromWhereArr: state.transfer.fromWhereArr,
        whereArrOne: state.transfer.whereArrOne,
        whereArrTwo: state.transfer.whereArrTwo,
        showSelect: state.transfer.showSelect,
        fromWhereVal: state.transfer.fromWhereVal,
        whereVal: state.transfer.whereVal,
        showAboutWay: state.transfer.showAboutWay,
        valueOne: state.transfer.valueOne,
        valueTwo: state.transfer.valueTwo
    };
};

export default connect(
    mapStateToProps,
    { fromWhereSelect, whereSelect, getPosts }
)(Transfer);
