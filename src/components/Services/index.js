import React from 'react';

function Services() {
  return (
    <section id="services" className="site-section section-services overlay text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="do-title">What I Do..</h3>
                </div>
                <div className="col-sm-6">
                    <div className="service">
                        <h4>Front-end</h4>
                        <p>As a JavaScript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced JavaScript MVC frameworks.</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="service">
                        <h4>Back-end</h4>
                        <p>Utilizing JavaScript frameworks such as Express including the creation of REST APIs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;