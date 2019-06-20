import React from 'react';

import "./selects-block.scss";

export default class SelectsBlock extends React.Component {
	render(){
        const { className = '', name, fromWhere, onChange, value, text } = this.props;
        return (
            <div className={`wrap-way ${className}`}>
                <label>{text}</label>
                <select name={name} onChange={onChange} value={value}>
				    {
					    fromWhere.map(
                            (el, ind) => <option value={ind} key={ind}>{el}</option>
					    )
				    }
                </select>
            </div>
		)
	}
}