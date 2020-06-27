import React, { Component } from 'react'


class Portfolio extends Component {
    render() {
        return (

            <section className="content-section" id="portfolio">
                <div className="container">
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">More EP</h3>
                        <h2 className="mb-5">Recent Projects</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="#!">
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Without words</div>
                                        <p className="mb-0">A dubstep journey</p>
                                        <iframe className="bd1" title="bd1" src="https://bandcamp.com/EmbeddedPlayer/album=3450742190/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/without-words">Without words by ELIHPOEHT records</a></iframe>

                                    </div>
                                </div>
                                <img className="img-fluid" src="img/cover.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="#!">
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Dub reality</div>
                                        <p className="mb-0">A travel throught jazz and dubstep</p>
                                        <iframe title="bd2" className="bd2" src="https://bandcamp.com/EmbeddedPlayer/album=755174149/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/dub-reality">Dub reality by ELIHPOEHT records</a></iframe>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/drc.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Portfolio