import React from 'react';
import resume from "../../assets/AriannaMcCollumResume.docx";

function About() {
  return (
    <section class="about" id="about">
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        <div class="about-container container text-center">
            <h2 class="about-title">About</h2>
            <p>Hello! I'm Arianna, a full stack developer. I have the most experience using JavaScript and have a knack for code quality. Feel free to take a look at my work and get in touch!</p>
            <a href={resume} class="btn btn-fill resume-btn" target="_blank" download>Download my resume</a>
        </div>
        <div class="skills-container container">
            <div class="text-center">
                <h2 class="skill-title">Skills</h2>
            </div>
            <div class="row">
                <div class="col-md-4 text-center skill-box">
                    <div class="skill">
                        <h4>HTML/CSS</h4> 
                    </div>
                    <div class="skill">
                        <h4>JavaScript</h4>  
                    </div>
                
                </div>
                <div class="col-md-4 text-center skill-box">
                    <div class="skill">
                        <h4>OOP</h4>
                    </div>
                    <div class="skill">
                        <h4>MySQL</h4>
                    </div>
                
                </div>
                <div class="col-md-4 text-center skill-box">
                    <div class="skill">
                        <h4>Node.js</h4>
                    </div>
                    <div class="skill">
                        <h4>Express.js</h4>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;