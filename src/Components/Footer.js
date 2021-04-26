import React, { Component } from 'react'
import '../Styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <section id="Footer">
                <div className="Footer-section">
                    <div className="Footer-title text-center"><h2>Do you want to work with me ?</h2></div>

                    <div className="Footer-links">
                        <div className="Footer-social">
                            <a className="Footer-link" href="https://www.linkedin.com/in/minh-khue-nguyen-b875a1193/"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="Footer-social">
                            <a className="Footer-link" href="https://github.com/binkei05011810"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="Footer-social">
                            <a className="Footer-link" href="https://www.facebook.com/profile.php?id=100008880063779"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>

                    <div className="Footer-copyright">
                        <i className="far fa-copyright"></i>
                        <p>Created by Nguyen Khue</p>
                    </div>
                </div>


            </section>
        )
    }
}

export default Footer;

