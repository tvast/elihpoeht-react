import React, { Component } from 'react';

class About extends Component {
    render() {
        return (

            <section className="callout">
                <div className="container text-center">
                    <h2 className="mx-auto mb-5 glitchy">Listen to
        <em> our new </em>
         EP</h2>

                    <div>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/852040264&auto_play=true&color=514e46">

                        </iframe><div
                            className="sdcl1"><a href="https://soundcloud.com/elihpoeht-records" title="Elihpoeht" target="_blank" className="cdcl1">Elihpoeht</a> · <a href="https://soundcloud.com/elihpoeht-records/the-face-of-mark-2" title="The Face" target="_blank" className="color: #cccccc; text-decoration: none;">The Face</a></div>
                        {/* <iframe title="elihpoeht2" width='450' height='315' src='https://www.diggersfactory.com/player/229405' frameborder='0' allowfullscreen></iframe> */}
                        <iframe title="elihpoeht" className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2787269949/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/ouf-of-jail">Ouf of jail by elihpoeht</a></iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default About