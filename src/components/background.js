import React from 'react';
import PropTypes from 'prop-types';

import './background.css';

const Background = (props) => {
    const { children } = props;

    //default style for the component
    let size = { width: '40%', height: '70vh' };

    //overwrite the default values
    if(props.size){
        size = props.size;
    }

    return(
        <div className="background rounded-lg overflow-y-scroll p-5 flex justify-center" style={ size }>
            {children}
        </div>
    );
};

Background.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
};

export default Background;