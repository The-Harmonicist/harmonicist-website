import './Hero.css';
import { useState, useEffect } from 'react';
import Album1 from './assets/Album1.jpg';
import Album2 from './assets/Album2.jpg';
import Album3 from './assets/Album3.jpg';

export default function Hero (){
    const images = [Album1, Album2, Album3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        
        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="hero" id="home">
            <div className="hero-background" style={{backgroundImage: `url(${images[currentIndex]})`}}></div>
            <div className="hero-content">
                <h1>The Harmonicist</h1>
                <p>Indie Musician | Music Producer | Multimedia Artist | Web Developer </p> 
                <h2>Welcome to the Harmonicist's World</h2>
            </div>
        </div>
    )
}