import React from 'react';

const Frictionpoints = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header">Friction Points</h1>
                <img
                    className="element-article-img"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,w_400/v1521004608/Screenshot_2017-11-28_03.22.55_jdljet.png"
                    alt="ux wireframe build built by hand drawing"
                />
                <div className="container-secondary-button-primary">
                    <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://res.cloudinary.com/iammichaelneal/image/upload/v1521004608/Screenshot_2017-11-28_03.22.55_jdljet.png"
                    >
                        Full-Size Example Arrangement of Tests
                    </a>
                </div>
                <div className="container-sub-text">
                    <p>
                        The same way that clashing personalities can introduce
                        friction and push away valuable people in our
                        organization, reducing friction will build trust with
                        users. The challange with friction is finding where it
                        might be living. Here are some quantative methods that
                        can look for the possible building of friction.
                    </p>
                    <p>
                        Correctly programmed tests to measure repeated
                        rapid-clicks are one method of determining if the clicks
                        are good clicks or bad clicks. It is important that the
                        context of the measurement be applied to the test
                        because a long session could be a good thing or a bad
                        thing depending on the content. For example, if the
                        content should take no longer than 30 seconds to
                        complete but for some users it is taking much longer
                        then this test must fail. Also, if the opposite is true,
                        where you are seeking to measure engagement, then a
                        longer measurement might be a positive test result.
                    </p>
                    <p>
                        Writing tests to observe conversion rates could reveal a
                        problem with design or UI flow. The second and equally
                        important aspect of conversion rate tests is to note
                        where the conversion is failing. For example, the last
                        successfully engagement was at X and Y was not completed
                        therefore the Z test failed.
                    </p>
                </div>
            </section>
        </div>
    </div>
);

export default Frictionpoints;
