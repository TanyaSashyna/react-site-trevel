import React from 'react';

export default class ContactItem extends React.Component {
    render() {
	const {classIcon, contactName, scheduleText} = this.props;
        return (
            <div className='contact-item'>
			<div className="contact-name">
				<i className={classIcon}></i> {contactName}:
			</div>
			<div className="contact-schedule">
				{scheduleText}
			</div>
		</div>
        )
    }
}