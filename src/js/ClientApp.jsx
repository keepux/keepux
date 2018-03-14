import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing';
import Uxdevelopment from './Uxdevelopment';
import Driveclean from './Driveclean';
import Serviceblueprint from './Serviceblueprint';
import Visualdesign from './Visualdesign';
import Storyboard from './Storyboard';
import Explainervideo from './Explainervideo';
import Uicomposition from './Uicomposition';
import Logos from './Logos';
import '../styles/_import.sass';

const FourZeroFour = () => (
    <div className="container-primary">
        <div className="container-secondary">
            <section className="container-section">
                <h1 className="section-element-header-error">404</h1>
                <p className="section-error">
                    The page you are looking for cannot be found.
                </p>
                <div className="section-error">
                    <Link to="/">Click this link to travel back home</Link>
                </div>
            </section>
        </div>
    </div>
);

const App = () => (
    <BrowserRouter>
        <div className="app container-app">
            <div className="container-header">
                <img
                    className="element-logo-app"
                    src="http://res.cloudinary.com/iammichaelneal/image/upload/c_scale,h_55/v1520789950/keepUX_logo_ojrezn.png"
                    alt="keep you ex logo"
                />
            </div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/ux-dev" component={Uxdevelopment} />
                <Route path="/drive-clean" component={Driveclean} />
                <Route
                    path="/service-model-blueprint"
                    component={Serviceblueprint}
                />
                <Route path="/visual-design" component={Visualdesign} />
                <Route path="/story-board" component={Storyboard} />
                <Route path="/explainer-video" component={Explainervideo} />
                <Route path="/ui-composition" component={Uicomposition} />
                <Route path="/logos" component={Logos} />
                <Route component={FourZeroFour} />
            </Switch>

            <input id="hamburger" className="hamburger" type="checkbox" />
            <label className="hamburger" htmlFor="hamburger">
                <i />
                <div className="text">
                    <div className="close">close</div>
                    <div className="open">menu</div>
                </div>
            </label>
            <section className="drawer-list">
                <ul className="drawer-style-ul">
                    <li className="drawer-style-li">
                        <Link className="drawer-style-a" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-a" to="/ux-dev">
                            UX Development
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-p" to="/drive-clean">
                            Drive Clean Texas
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-a" to="/qualatative-ux">
                            Qualatative UX
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link
                            className="drawer-style-p"
                            to="/service-model-blueprint"
                        >
                            Service Model Blueprint
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link
                            className="drawer-style-p"
                            to="/survey-for-friction"
                        >
                            Survey for friction points
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-a" to="/visual-design">
                            Visual Design
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-p" to="/story-board">
                            Storyboarding
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-p" to="/explainer-video">
                            Explainer Video
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-p" to="/ui-composition">
                            UI Composition
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-p" to="/logos">
                            Logos
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <Link className="drawer-style-a" to="/visual-design">
                            Prototypes
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));
