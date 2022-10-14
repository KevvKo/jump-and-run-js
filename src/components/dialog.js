import React from 'react';
import PropTypes from 'prop-types';

export default function Dialog(props){
    
    const { children } = props;
    return(
        <div className="dialog absolute w-4/12 h-2/6 rounded-lg text-3xl opacity-80 flex justify-center items-center text-slate-200 bg-slate-700">
            {children}
        </div>
    );
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired
};