import React from 'react';
import profilePicture from "../../assets/profile/arianna-mccollum.png.jpg";

function Header() {
  
  return (
    <section className="hero" id="hero">
        <div className="hero-cta" id="hero-cta">
            <h2>Arianna McCollum</h2>
            <p>
                Full Stack Developer
            </p>
          </div>
            <img className="me" src={profilePicture}/>
    </section>
  );
}

export default Header;