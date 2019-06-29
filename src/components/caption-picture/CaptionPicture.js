import React from 'react';

import "./caption-picture.scss";

export default class CaptionPicture extends React.Component {
    render(){
        return(
            <div className="picture">
                <div className="caption-page">
                    <div className="container">
                        <h1>{this.props.text}</h1>
                    </div>
                </div>
            </div>
        )
    }
}