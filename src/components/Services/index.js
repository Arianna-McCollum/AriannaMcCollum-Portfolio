import React from 'react';

function Services() {
  return (
    <section id="services" class="site-section section-services overlay text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="do-title">What I Do..</h3>
                </div>
                <div class="col-sm-6">
                    <div class="service">
                        <h4>Front-end</h4>
                        <p>As a JavaScript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced JavaScript MVC frameworks.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="service">
                        <h4>Back-end</h4>
                        <p>Utilising JavaScript frameworks such as Express including the creation of REST APIs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;