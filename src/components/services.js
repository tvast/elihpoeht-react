

import React, { Component } from 'react'


class Services extends Component {
    render() {
        return (

            <div className="container-fluid p-0">

                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Elihpoeht
                        <span className="text-primary">Théophile</span>
                        </h1>
                        <div className="subheading mb-5">
                            Paris / Madrid
                        <a href="mailto:elihpoehtmusic@gmail.com"> Contact me</a>
                        </div>
                        <p className="lead mb-5">I'm a live performer who work with ableton, if you like my work ping me and it will be a pleasure to talk with you</p>
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/theophile-vast/"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-github"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services