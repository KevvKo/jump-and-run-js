import React from 'react';
import Background from '../components/background';

const Credits = () =>{
    
    const styles =  {
        container1: 'flex flex-col justify-center items-center text-center text-white',
        text: 'opacity-60 text-xl mb-1',
        title: 'opacity-60 text-6xl my-5',
        subtitle: 'opacity-60 text-3xl mb-2 mt-3'
    };      

    return (
        <div className={styles.container1}>
            <Background>
                <h1 className={styles.title}>Credits</h1>
                <h2 className={styles.subtitle}>Development</h2>
                <p className={styles.text}>Kevin Klein</p>
                <h2 className={styles.subtitle}>Design</h2>
                <p className={styles.text}>Kevin Klein</p>
                <h2 className={styles.subtitle}>Music</h2>
                <p className={styles.text}>Sappheiros</p>
                <p className={styles.text}>Known</p>
                <p className={styles.text}>Patrick Patrikios</p>
                <p className={styles.text}>Unicorn Heads</p>
                <p className={styles.text}>The 129ers</p>
                <p className={styles.text}>Devon Church</p>
                <p className={styles.text}>Coyote Hearing</p>
                <p className={styles.text}>Dan Hening</p>
                <p className={styles.text}>Jeremy Black</p>
                <h2 className={styles.subtitle}></h2>
                <p className={styles.text}></p>
            </Background>
        </div>
    );
};

export default Credits;