import React from 'react';
import background from '../images/background.jpg';
import me from '../images/me.jpg';

const styles = {
    heroStyle: {
        backgroundImage: `url(${background})`,
    }
}

function Hero() {
    return (
        <section className="hero min-1/2" style={styles.heroStyle}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={me} className="sm:max-w-md rounded-lg shadow-2xl" alt="Me" />
                <div>
                    <h1 className="text-5xl font-bold">Krystopher Quintero</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;