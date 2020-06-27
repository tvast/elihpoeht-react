import React, { Component } from 'react'

import ReactPlayer from "react-player"
class About extends Component {
    render() {
        return (

            <section className="callout">
                <div className="container text-center">
                    <h2 className="mx-auto mb-5 glitchy">Listen to
        <em> Out of jail </em>
         new Album</h2>
                    <div>
                        <iframe title="elihpoeht" className="bandcamp"  src="https://bandcamp.com/EmbeddedPlayer/album=2787269949/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://elihpoehtrecord.bandcamp.com/album/ouf-of-jail">Ouf of jail by elihpoeht</a></iframe>
                    </div>
                    <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/themes/stylish-portfolio/">Download Now!</a>
                </div>
            </section>
        )
    }
}

export default About