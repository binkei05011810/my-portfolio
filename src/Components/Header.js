import React, { Component } from 'react'
import '../Styles/Header.css'

class Header extends Component {
    render() {
        return (
            <header id="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="text-center my-auto Header-section">
                                <h1 className="mb-1">Hello, I am Nguyen Khue</h1>
                                <h3 className="mb-4">A passionate tech student at Aalto University</h3>
                                <a className="Header-button btn" href="#About">Find Out More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4 offset-4 text-center">
                            <img alt="A cat carry a can of milk" className="img-fluid" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619157370/cutecat-removebg-preview_ncpbjm.png" />
                        </div>
                    </div>
                </div>
                <div className="Header-endline"></div>
            </header>
        )
    }
}

export default Header;
