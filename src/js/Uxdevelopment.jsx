import React from 'react';

const Uxdevelopment = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">UX Development</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521002278/ux-dev-infographic_mo66qj.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        The aim of UX development is to understand the strategy
                        and customer insight that is driving the bigger picture
                        product decisions. UX development sits inherintly close
                        to the pixel level of things.
                    </p>
                    <p>
                        UX development fits well where a traditional UX role has
                        been previously established. The UX roles can work
                        together to accomplish more work together than they
                        might apart.
                    </p>
                    <p>
                        Having UX development in your organization can eliminate
                        the need to put all the stakeholders through the
                        wireframing process and allows for more meaningful
                        stakeholder actions getting to the behavior of a thing
                        much quicker.
                    </p>
                </div>
                <div className="container-secondary-button-primary">
                    <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://res.cloudinary.com/iammichaelneal/image/upload/v1521002278/ux-dev-infographic_mo66qj.png"
                    >
                        View a larger image of the diagram
                    </a>
                </div>
                <div className="container-secondary-button-secondary">
                    <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/keepux/webpack-wireframe"
                    >
                        UX Dev Boilerplate (Source Code)
                    </a>
                </div>
            </section>
        </div>
    </div>
);

export default Uxdevelopment;
