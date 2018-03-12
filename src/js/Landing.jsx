import React from 'react';

const Landing = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">UX Portfolio</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1520805841/pexels-photo-711193_mpgdkr.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        The success of how well the design of a thing has been
                        integrated into development a thing can be determined by
                        how well the experience of a thing has been improved.
                    </p>
                    <p>
                        Creating a delightful experiences requires knowledge of
                        how decisions are made. Furthermore, intuition plays a
                        significant role in determining the complex and often
                        subconscious set of decisions that a person might make
                        in interacting with a design.
                    </p>
                    <p>
                        The craft of UX is the set of guidelines, or methods,
                        that allow us to better understand the decisions and
                        possible actions which are mostly guided by intuition,
                        and how to improve and guide design decisions to allow
                        for an overall improvement in experience.
                    </p>
                </div>
            </section>
        </div>
    </div>
);

export default Landing;
