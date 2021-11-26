import React from 'react';
import project1 from "../../assets/projects/portfolio-1.png";
import project2 from "../../assets/projects/portfolio-2.png";
import project3 from "../../assets/projects/portfolio-3.png";
import project4 from "../../assets/projects/portfolio-4.png";
import project5 from "../../assets/projects/portfolio-5.png";
import project6 from "../../assets/projects/portfolio-6.png";

function Portfolio() {
  return (
<section id="portfolio" class="section-portfolio">
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
        <div class="container">
            <div class="text-center">
                <h3 class="portfolio-title">Portfolio</h3>
            </div>
            <div class="row">
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project1} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Newna-Bros</h4>
                            <p>
                            The landing page for the fictitious <br></br>e-commerce ski shop, "Newna Bros.".
                            </p>
                            <a href="https://newna-bros-ski-shop.herokuapp.com/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/newna-slopes/" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project2} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Reading-Corner</h4>
                            <p>
                            User's are able to journal their thoughts while reading a specific book.
                            </p>
                            <a href="https://reading-corner.herokuapp.com/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Reading-corner" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project3} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Create-A-Date</h4>
                            <p>
                            Creates a randomized date when given a user's location
                            </p>
                            <a href="https://electrolion.github.io/Create-a-date/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Create-a-date" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project4} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Coding Quiz</h4>
                            <p>
                            A 10 question coding quiz where if<br></br> you get an answer wrong, time is subtracted!
                            </p>
                            <a href = "https://electrolion.github.io/Coding-Quiz/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Coding-Quiz" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project5} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Weather Dashboard</h4>
                            <p>
                            An app the utilizes an API to give the <br></br> a user a current and 7 day forecast based on their area.
                            </p>
                            <a href="https://electrolion.github.io/Weather-Dashboard/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Weather-Dashboard" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src={project6} className="img-res"/>
                        <div className="portfolio-item-info">
                            <h4>Note Taker</h4>
                            <p>
                            A simple note taking app where the user can create, edit or delete their notes.
                            </p>
                            <a href="https://note-taker-app-100.herokuapp.com/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/note-taker" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;