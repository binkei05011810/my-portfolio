import React, { Component } from 'react'
import '../Styles/Certificate.css'
import { v4 as uuidv4 } from 'uuid';
import CertiDescription from './CertiDescription.js'

class Certificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkItem: this.props.certificates[0].id,
            checkExpItem: this.props.experiences[0].id,
            isCertiSection: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickChoice = this.handleClickChoice.bind(this);
    }

    static defaultProps = {
        certificates: [{
            id: uuidv4(),
            title: "Udemy",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619345459/udemy-removebg-preview_vvlrux.png",
            src: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619214450/udemy-1_sqxdjr.png",
            description: "The Web Development Bootcamp 2021",
        },
        {
            id: uuidv4(),
            title: "AMVNX 2016",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619345850/unnamed-removebg-preview_nst5rm.png",
            src: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619214954/AMVNX_Certificate_2016_2_-1_dz0kst.png",
            description: "Education Fair 2016"
        },
        {
            id: uuidv4(),
            title: "AMVNX 2017",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619345850/unnamed-removebg-preview_nst5rm.png",
            src: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619214975/AMVNX_Certificate_2017_1_-1_2_uytvea.png",
            description: "Eduaction Fair 2017"
        },
        {
            id: uuidv4(),
            title: "IVMUN",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619346759/removal.ai__tmp-608544de7b7d4_1_wwtfyd.png",
            src: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619214986/IVIMUN_Certificate_1_-1_oearvh.png",
            description: "Core PR Team"
        }],
        experiences: [{
            id: uuidv4(),
            title: "Ignite by Aaltoes",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619372964/Screen_Shot_2021-04-25_at_20.47.49_x6rcry.png",
            src: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619372966/ignite_lije9u.jpg",
            description: "Ignite is a student startup accelerator, where students will get a chance to their start-up ideas in a safe and supporting environment. I am currently working as a software developer for my team."
        },
        {
            id: uuidv4(),
            title: "Teaching Assistant",
            icon: "https://res.cloudinary.com/minhkhue181001/image/upload/v1619373504/Screen_Shot_2021-04-25_at_20.56.59-removebg-preview_o1myin.png",
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            description: "I am a Teaching Assistant for the Data Structures and Algorithms Course"
        }]
    };

    handleClick(evt) {
        if (this.state.isCertiSection) {
            this.setState({ checkItem: evt.target.id });
        } else {
            this.setState({ checkExpItem: evt.target.id });
        }
    }

    handleClickChoice(evt) {
        if (evt.target.id === "certificate") {
            this.setState({ isCertiSection: true })
        } else {
            this.setState({ isCertiSection: false })
        }
    }

    render() {
        let data;
        let activeItem;

        if (this.state.isCertiSection) {
            data = this.props.certificates;
            activeItem = this.state.checkItem;
        } else {
            data = this.props.experiences;
            activeItem = this.state.checkExpItem;
        }

        return (
            <section id="Certificate">
                <div className="container">
                    <div className="Certificate-section">
                        <div className="Certificate-title d-flex align-items-center justify-content-center">
                            <h2>Certificates and Experiences</h2>
                        </div>

                        <div className="Section-choosen">
                            <div className="Choice">
                                <i id="certificate"
                                    className={`fas fa-heart ${this.state.isCertiSection ? "certi-active" : "certi-normal-icon"}`}
                                    onClick={this.handleClickChoice}></i>
                                <h3 id="certificate" className={this.state.isCertiSection ? "certi-active" : "certi-normal"} onClick={this.handleClickChoice}>My Certificates</h3>
                            </div>
                            <div className="Choice">
                                <i id="exp" className={`fas fa-briefcase ${!this.state.isCertiSection ? "exp-active" : "exp-normal-icon"}`} onClick={this.handleClickChoice}></i>
                                <h3 id="exp" className={!this.state.isCertiSection ? "exp-active" : "exp-normal"} onClick={this.handleClickChoice}>My Experiences</h3>
                            </div>
                        </div>

                        <div className="Certification-wrapper">
                            <div className="Certificate-detail">
                                <div className="Certificate-left">
                                    <ul className="Certi-list" >
                                        {data.map(certi => {
                                            return (
                                                <li className="Certi-item" key={certi.id}>
                                                    <i className={`Certi-icon ${certi.id === activeItem ? "Icon-active" : "Icon-normal"} fas fa-check-circle`}></i>
                                                    <h2 id={certi.id}
                                                        className={`Certi-name ${certi.id === activeItem ? "Certi-active" : "Certi-normal"}`}
                                                        onClick={this.handleClick}>{certi.title}</h2>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="middle-border"></div>
                                <div className="Certificate-right">
                                    <div className="Description-secion">
                                        <CertiDescription item={data.find(certi => certi.id === activeItem)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <a className="Header-button btn" href="#Skill">Explore my Tech Stack</a>
                        </div>
                    </div>
                </div>
                <div className="Header-endline"></div>
            </section >
        )
    }
}

export default Certificate;
