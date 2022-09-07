import React from 'react';
import spaceship from '../assets/img/spaceship.png';
import laser from '../assets/img/laser.png';
import asteroid1 from '../assets/img/asteroid1.png';

const ImagePreloader = () => {
    return(
        <div className="images hidden">
            <img id ='spaceship' src={ spaceship } />
            <img id ='laser' src={ laser } />
            <img id='asteroid1' src={asteroid1} />
        </div>
    );
};

export default ImagePreloader;