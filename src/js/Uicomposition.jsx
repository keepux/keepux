import React from 'react';
import { Link } from 'react-router-dom';

const Uicomposition = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">UI Composition</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1473134017/breakpoints_ysm2jz.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        When crafting UI systems there comes up a conversation
                        from time to time about semantics. An nested approach to
                        the nesting of things is helpful. In this example, we
                        start with the viewport and work our way into an
                        element. This is a visual diagram showing how this
                        nesting is coordinated.
                    </p>
                </div>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521004608/Screenshot_2017-12-15_15.22.23_dampdl.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        In this example, an innovative table design helps keep
                        the relevant content displayed on each row with the
                        detailed information hidden but readily available
                        without needing to navigate away from the screen. Some
                        input a UX dev might provide in this example, it might
                        be important to consider how many records are displayed
                        initially as to keep the scrolling to a minimum.
                    </p>
                </div>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521004605/Screenshot_2017-07-17_10.50.29_k0cf8z.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-sub-text">
                    <p>
                        In this example, we are presented with a blueprint for a
                        mobile layout. This generic looking layout might be used
                        to intially test loading across various mobile devices
                        and investigate any possible issues with the layout
                        before moving into the inner elements.
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
