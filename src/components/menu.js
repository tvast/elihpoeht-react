
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
// import Services from './services'
// import Menu from './components/menu'

class Menu extends Component {
    render() {
        return (

            <Router>

                {/* <nav className="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger glitchy" href="#page-top">Elihpoeht</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">

                        <div>
                            <div>
                             
                            </div>

                        </div>




                    </div>
                </div>
            </nav> */}

                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Elihpoeht</span>
                        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon">MENU</span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav"> */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/">Home</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/news">News</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/moremusic">More music</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/news">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/moremusic">
                        <Portfolio />
                    </Route>
                    <Route path="/services">
                        <Services />
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

