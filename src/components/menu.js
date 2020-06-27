
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './about'
import Services from './services'
import Portfolio from './portfolio'
import Header from './header'
// import Menu from './components/menu'

class Menu extends Component {
    render() {
        return (

            <Router><nav className="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Elihpoeht</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">

                        <div>
                            <div>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio"><Link to="/">Home</Link></a></li>
                                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about"><Link to="/news">News</Link></a></li>
                                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact"><Link to="/moremusic">More music</Link></a></li>
                                </ul>
                            </div>

                        </div>




                    </div>
                </div>
            </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/new">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/moremusic">
                        <Portfolio />
                    </Route>
                    <Route path="/">
                        <Header />
                    </Route>
                </Switch>
            </Router>


        )
    }
}

export default Menu

