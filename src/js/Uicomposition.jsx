import React from 'react';
import { Link } from 'react-router-dom';

const Uicomposition = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">UI Composition</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521003722/Screenshot_2017-07-19_13.20.29_p6qajw.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Eget magna fermentum iaculis eu non diam
                        phasellus.
                    </p>
                </div>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521004608/Screenshot_2017-12-15_15.22.23_dampdl.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Eget magna fermentum iaculis eu non diam
                        phasellus.
                    </p>
                </div>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521004605/Screenshot_2017-07-17_10.50.29_k0cf8z.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Eget magna fermentum iaculis eu non diam
                        phasellus.
                    </p>
                </div>

                <div className="container-secondary-button-primary">
                    <Link className="button" to="/drive-clean">
                        View a UI Flow Composition
                    </Link>
                </div>
            </section>
        </div>
    </div>
);

export default Uicomposition;
