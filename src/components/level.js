import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Level = (props) => {

    const { src, alt } = props;

    return(
        <Link to='/play'>
            <div className="level bg-black m-2.5 rounded-lg w-80 h-60 hover:cursor-pointer">
                <img src={src} alt={alt}></img>
            </div>
        </Link>
    );
};

Level.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
};

export default Level;

