import React, { Component } from 'react'
import '../Styles/Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(st => {
            return { isActive: !st.isActive }
        });
    }

    render() {
        return (
            <div>
                <a onClick={this.toggleMenu} className="menu-toggle rounded" href="#">

                    {!this.state.isActive
                        ? <i className="fas fa-bars"></i>
                        : <i className="fas fa-times"></i>}
                </a>
                <nav id="Navbar" className={`${this.state.isActive ? "active" : ""}`}>
                    <ul className="Navbar-list">
                        <li className="Navbar-brand">
                            <a className="Navbar-link" href="#Header">My Portfolio</a>
                        </li>
                        <li className="Navbar-item">
                            <a className="Navbar-link" href="#Header">Home</a>
                        </li>
                        <li className="Navbar-item">
                            <a className="Navbar-link" href="#About">About</a>
                        </li>
                        <li className="Navbar-item">
                            <a className="Navbar-link" href="#Project">Projects</a>
                        </li>
                        <li className="Navbar-item">
                            <a className="Navbar-link" href="#Certificate">Certificates and Experiecnes</a>
                        </li>
                        <li className="Navbar-item">
                            <a className="Navbar-link" href="#Skill">Skills</a>
                        </li>
                    </ul>
                </nav>
            </div >
        )
    }
}

export default Navbar;
