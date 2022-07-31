import React from 'react';
import PropTypes from 'prop-types';

import './background.css';

const Background = (props) => {

    //default style for the component
    let size = { width: '40%', height: '70vh' };

    //overwrite the default values
    if(props.size){
        size = props.size;
    }

    return(
        <div className="background rounded-lg overflow-y-scroll" style={ size }>
            {props.content}
        </div>
    );
};

Background.propTypes = {
    size: PropTypes.string,
    content: PropTypes.node
};

export default Background;