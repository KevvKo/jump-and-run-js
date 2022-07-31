import React from 'react';
import PropTypes from 'prop-types';
import './headerButton.css';

const HeaderButton = (props) => {

    return(
        <div className={'headerbutton ' + props.className} onClick={props.callback}>
            <span className="material-icons">{props.icon}</span>
        </div>
    );
};

HeaderButton.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func,
    icon: PropTypes.string
};

export default HeaderButton;