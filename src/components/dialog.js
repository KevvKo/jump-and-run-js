import React from 'react';
import PropTypes from 'prop-types';

export default function Dialog(props){
    
    const { children } = props;
    return(
        <div className="dialog absolute w-3/6 h-4/5 rounded-lg opacity-80 flex justify-center items-center text-white">
            {children}
        </div>
    );
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired
};