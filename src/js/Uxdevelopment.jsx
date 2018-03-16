import React from 'react';

const Uxdevelopment = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">UX Development</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521043552/ux-dev-infographic_y8holm.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-secondary-button-primary">
                    <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://res.cloudinary.com/iammichaelneal/image/upload/v1521043552/ux-dev-infographic_y8holm.png"
                    >
                        View a larger image of the diagram
                    </a>
                </div>
                <div className="container-sub-text">
                    <p>
                        The aim of UX development is to understand the strategy
                        and customer insight that is driving the bigger picture
                        and product development decisions. UX development sits
                        inherintly close to the pixel level of things.
                    </p>
                    <p>
                        Having UX development in your organization can eliminate
                        the need to continually put the stakeholders through the
                        wireframing process which will allow for more meaningful
                        stakeholder communications.
                    </p>
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
