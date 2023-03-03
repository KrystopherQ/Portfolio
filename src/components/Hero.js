import React from 'react';
import background from '../images/background.jpg';

const styles = {
    heroStyle: {
        backgroundImage: `url(${background})`,
    }
}

function Hero() {
    return (
        <section className="hero min-h-screen" style={styles.heroStyle}>
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-3xl font-bold">Krystopher Quintero</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;