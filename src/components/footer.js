import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (

            <footer className="footer text-center">
                <div className="container">
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/elihpoehtRecords/">
                                <i className="icon-social-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="https://twitter.com/theophile_vast">
                                <i className="icon-social-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href="https://github.com/tvast">
                                <i className="icon-social-github"></i>
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Elihpoeht Thophile Vast 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer