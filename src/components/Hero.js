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
                    <h1 className="text-4xl py-10 text-base-300 font-bold">Krystopher Quintero</h1>
                    <p class="py-20"></p>
                </div>
            </div>
        </section>
    )
}

export default Hero;