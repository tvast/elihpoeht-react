import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="contact-form">
                    <div className="horline"></div>
                    <div className="vertline"></div>
                    <div className="form-background"></div>
                    {/* <img className="cross" src="http://www.testomic.com/public/codepen-assets/img/cross.svg"></img> */}
                    <form id="contact" method="POST" accept-charset="UTF-8">
                        <div className="name text-input">
                            <label>Name</label>
                            <div className="error-mark">*</div>
                            <input type="text" maxlength="50" name="name" />
                        </div>
                        <div className="email text-input">
                            <label>Email</label>
                            <div className="error-mark">*</div>
                            <input type="email" maxlength="50" name="email" />
                        </div>
                        <div className="message text-input">
                            <label>Message</label>
                            <div className="error-mark">*</div>
                            <textarea type="text" name="msg"></textarea>
                        </div>
                        <input type="submit" className="submit" value="" />
                        <div className="result">
                            <div className="result-message">Sent</div>
                            <img class="submit-icon" src="http://www.testomic.com/public/codepen-assets/img/icon_letter_mail.svg"></img>
                        </div>

                    </form>
                </div>
            </div>




        )
    }
}

export default Contact