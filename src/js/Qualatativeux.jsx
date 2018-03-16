import React from 'react';

const Qualatativeux = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">Qualatative UX</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521056398/Screenshot_2018-03-14_14.39.43_rmwniy.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-secondary-button-primary">
                    <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://medium.com/@iammichaelneal/ethnography-in-user-experience-design-89105d8fc4b4"
                    >
                        Read Ethnography in UX Research
                    </a>
                </div>
                <div className="container-sub-text">
                    <p>
                        In many ways, UX is an extension of psychology. It is
                        also an extension of sociology. Specifically
                        ethnography. Ethnography is special when it comes to
                        data because of how it is carried out, there is more
                        chances of capturing how a product or service is used in
                        reality vs. in a simulation which is a more true test of
                        usability and therefore more practical data.
                    </p>
                    <p>
                        Ethnography is also very important when it comes to
                        converting qualatative findings into quantative data.
                        For example, we might need to use a confidence interval
                        to have measurable data. Having a solid ethnographic
                        approach to gathering the findings is key to building a
                        rock-star set of measurable data that is filtered for
                        bias.
                    </p>
                </div>
            </section>
        </div>
    </div>
);

export default Qualatativeux;
