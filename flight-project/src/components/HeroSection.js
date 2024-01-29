import React from 'react';
import './Hero.css';
function HeroSection(){
  return (
    <div className="hero">
        <img alt="hero" src='/assets/roadtrip.jpg'/>
        <div className="hero-text">
            <h1>Your journey, your story</h1>
            <p>Choose your own destination</p>
            <button className="show"><a href="/">Travel Plan</a></button>
        </div>
    </div>
  )
}

export default HeroSection