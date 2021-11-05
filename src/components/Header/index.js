import React from 'react';
import profilePicture from "../../assets/profile/arianna-mccollum.png.jpg";

function Header() {
  return (
    <section class="hero" id="hero">
        <div class="hero-cta">
            <h2>Arianna McCollum</h2>
            <p>
                Full Stack Developer
            </p>
          </div>
            <img class="me" src={profilePicture}/>
    </section>
  );
}

export default Header;