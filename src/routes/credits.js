import React from 'react';
import Background from '../components/background';

const Credits = () =>{
    
    const content = 
        <div>
            <h1 className='opacity-60 text-6xl'>Credits</h1>
            <h2 className='opacity-60 text-3xl'>Development</h2>
            <p className='opacity-60 text-xl'>Kevin Klein</p>
            <h2 className='opacity-60 text-3xl'>Design</h2>
            <p className='opacity-60 text-xl'>Kevin Klein</p>
            <h2 className='opacity-60 text-3xl'>Music</h2>
            <p className='opacity-60 text-xl'>Sappheiros</p>
            <p className='opacity-60 text-xl'>Known</p>
            <p className='opacity-60 text-xl'>Patrick Patrikios</p>
            <p className='opacity-60 text-xl'>Unicorn Heads</p>
            <p className='opacity-60 text-xl'>The 129ers</p>
            <p className='opacity-60 text-xl'>Devon Church</p>
            <p className='opacity-60 text-xl'>Coyote Hearing</p>
            <p className='opacity-60 text-xl'>Dan Hening</p>
            <p className='opacity-60 text-xl'>Jeremy Black</p>
            <h2 className='opacity-60 text-3xl'></h2>
            <p className='opacity-60 text-xl'></p>
            <h2 className='opacity-60 text-3xl'>Participants</h2>
            <p className='opacity-60 text-xl'>Benjamin Gypser</p>
            <p className='opacity-60 text-xl'>Marius Treichel</p>
        </div>;
    
    return (
        <div className='credits flex flex-col justify-center items-center text-center text-white'>
            <Background content={content}/>
        </div>
    );
};

export default Credits;