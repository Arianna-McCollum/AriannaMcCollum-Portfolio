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
        <div class="container">
            <div class="text-center">
                <h3 class="portfolio-title">Portfolio</h3>
            </div>
            <div class="row">
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href="https://reading-corner.herokuapp.com/">
                        <img src={project1} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Reading-Corner</h4>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href="https://electrolion.github.io/Create-a-date/">
                        <img src={project2} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Create-A-Date</h4>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href = "https://electrolion.github.io/Coding-Quiz/">
                        <img src={project3} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Coding Quiz</h4>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href ="https://github.com/Electrolion/TeamProfileGenerator">
                        <img src={project4} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Team Generator</h4>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href="https://electrolion.github.io/Weather-Dashboard/">
                        <img src={project5} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Weather Dashboard</h4>
                            
                        </div>
                    </a>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <a href="https://note-taker-app-100.herokuapp.com/">
                        <img src={project6} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Note Taker</h4>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;