import React, { Component } from 'react'
import '../Styles/ContactButton.css'

class ContactButton extends Component {
    render() {
        return (
            <div id="#Contact">
                <div className="Contact-button">
                    <a className="Contact-link" href="#Footer"><i className="fas fa-address-book"></i></a>
                </div>
            </div>
        )
    }
}

export default ContactButton;