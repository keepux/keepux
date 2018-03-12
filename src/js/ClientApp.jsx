import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing';
import Research from './Research';
import Uxdevelopment from './Uxdevelopment';
import '../styles/_import.sass';

const FourZeroFour = () => <h1>404</h1>;

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
                <Route path="/research" component={Research} />
                <Route path="/ux-development" component={Uxdevelopment} />
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
                        {/* <a href="#">Qualatative UX</a> */}
                        <Link className="drawer-style-a" to="/ux-development">
                            UX Development
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        {/* <a href="#">Qualatative UX</a> */}
                        <Link className="drawer-style-a" to="/research">
                            Qualatative UX
                        </Link>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Prototypes
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Customer Feedback
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <a className="drawer-style-a" href="/">
                            Quantatative UX
                        </a>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Visual Regression
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            BDD
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <a className="drawer-style-a" href="/">
                            Design
                        </a>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Color
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Atomic Design
                        </p>
                    </li>
                    <li className="drawer-style-li">
                        <p className="drawer-style-p" href="/">
                            Visual Composition
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));
