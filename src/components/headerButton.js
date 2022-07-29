import React from 'react';
import './headerButton.css';

export default function HeaderButton(props){

    return(
        <div className={'headerbutton ' + props.className} onClick={props.callback}>
            <span className="material-icons">{props.icon}</span>
        </div>
    );
}