import React, { Component } from 'react'


class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="callout">
                    <div className="container text-center">
                        <h2 className="mx-auto mb-5 glitchy">Discover
        <em> our latest </em>
        release</h2>
                        {/* <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/themes/stylish-portfolio/">Download Now!</a> */}
                    </div>
                </section>


                <section className="content-section" id="portfolio">
                    <div className="container">
                        <div className="content-section-heading text-center">
                            <h3 className="text-secondary mb-0">Portfolio</h3>
                            <h2 className="mb-5">Latest release</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <a className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Out of jail</div>
                                            <p className="mb-0">A dark, deep and abscrtract dubstep experience</p>
                                            <iframe title="bdp4" className="bdp4" src="https://bandcamp.com/EmbeddedPlayer/album=2787269949/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/ouf-of-jail">Ouf of jail by elihpoeht</a></iframe>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://f4.bcbits.com/img/a2231027259_16.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <a className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Dub reality</div>
                                            <p className="mb-0">When jazz meet dubstep</p>
                                            <iframe title="bdp3" className="bdp3" src="https://bandcamp.com/EmbeddedPlayer/album=755174149/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/dub-reality">Dub reality by ELIHPOEHT records</a></iframe>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://f4.bcbits.com/img/a2555949196_16.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <a className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Sad morning</div>
                                            <p className="mb-0">Melancholic dubstep</p>
                                            <iframe title="bdp1" className="bdp1" src="https://bandcamp.com/EmbeddedPlayer/album=1465202985/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/sad-morning">Sad morning by ELIHPOEHT records</a></iframe>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://f4.bcbits.com/img/a1153087353_16.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <a className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Without words</div>
                                            <p className="mb-0">Classic dubstep vibe</p>
                                            <iframe title="bdp2" className="bdp2" src="https://bandcamp.com/EmbeddedPlayer/album=3450742190/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/without-words">Without words by ELIHPOEHT records</a></iframe>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://f4.bcbits.com/img/a1694137975_16.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <header>
                    <div className="overlay"></div>
                    <video playsinline="playsinline" autoPlay="autoPlay" muted="muted" loop="loop">
                        <source src="http://elihpoehtmusic.co.uk/media/header.bb9d72bb.mp4" type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <h1 className="display-3">Enter to Elihpoeht's galaxy</h1>
                                <p className="lead mb-0">:)</p>
                            </div>
                        </div>
                    </div>
                </header>

            </div>





        )
    }
}

export default Portfolio