import React, { Component } from "react";
import { connect } from "react-redux";

import "./count.scss";

import { increase, decrease } from "../actions/todo";

export class Count extends Component {
    render() {
        const { counter, decrease, increase } = this.props;
        return (
            <div className="main">
                <h1>Counter {counter}</h1>
                <button className="btn-action" onClick={increase}>+</button>
                <button className="btn-action" onClick={decrease}>-</button>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.count
    };
};

export default connect(
    mapStateToProps,
    { increase, decrease }
)(Count);