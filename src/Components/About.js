import React, { Component } from 'react'
import '../Styles/About.css'

class About extends Component {
    render() {
        return (
            <section id="About">
                <div className="About-container">
                    <div className="About-title text-center"><h2>Get to know me!</h2></div>
                    <div className="About-section">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 About-description d-flex flex-column justify-content-center align-items-center">
                                <p className="description">
                                    Hi, my name is Nguyen Khue, a second - year Data Science student at Aalto University.
                                    I have a great passion in Technologies and I love building and developing products.
                                    Currently, my team is a part of Ignite Batch 2021 in Ignite by Aaltoes, a student
                                    accelerator supporting start-up and my role is a software developer.
                                </p>

                                <a className="Header-button btn" href="#Project">Explore my Projects</a>
                            </div>
                            <div className="col-md-6 About-img-section d-flex flex-column justify-content-center align-items-center">
                                <img className="img-fluid About-img" alt="my avatar" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619263857/about_hwae3l.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Header-endline"></div>
            </section>
        )
    }
}

export default About;