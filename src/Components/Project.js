import React, { Component } from 'react'
import '../Styles/Project.css'

class Project extends Component {
    render() {
        return (
            <section id="Project">
                <div className="container">
                    <div className="Project-section">
                        <div className="Project-title"><h2>My Projects</h2></div>

                        <div className="Project-container">
                            <div className="Project-item">
                                <div className="Project-inner">
                                    <div className="Project-description order-2 order-md-1">
                                        <div className="Project-detail">
                                            <div>
                                                <h3>Yelp Camp</h3>
                                                <p>A travel website using Bootstrap Front-end framework, mongoDB and Express as Back-end.</p>
                                            </div>

                                            <div className="Project-buttons">
                                                <a className="btn btn-project" href="https://thawing-coast-67157.herokuapp.com/" target="_blank">View Page</a>
                                                <a className="btn btn-project" href="https://github.com/binkei05011810/yelpcamp" target="_blank">Github</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="Project-img d-flex justify-content-center align-items-center order-1 order-md-2">
                                        <img className="img-fluid" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619206142/Webp.net-gifmaker_2_zpkrar.gif" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Project-container">
                            <div className="Project-item">
                                <div className="Project-inner">
                                    <div className="Project-img d-flex justify-content-center align-items-center order-1">
                                        <img className="img-fluid" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619194842/Webp.net-gifmaker_1_avpihy.gif" />
                                    </div>

                                    <div className="Project-description order-2">
                                        <div className="Project-detail">
                                            <div>
                                                <h3>Todo App</h3>
                                                <p>A simple TodoList App using React.</p>
                                            </div>

                                            <div className="Project-buttons">
                                                <a className="btn btn-project" target="_blank" href="https://nmk-todo-app.netlify.app/">View Page</a>
                                                <a className="btn btn-project" target="_blank" href="https://github.com/binkei05011810/todo-app">Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Project-container">
                            <div className="Project-item">
                                <div className="Project-inner">
                                    <div className="Project-description order-2 order-md-1">
                                        <div className="Project-detail">
                                            <div>
                                                <h3>Lights Out Game</h3>
                                                <p>A simple lights out game using React.</p>
                                            </div>

                                            <div className="Project-buttons">
                                                <a className="btn btn-project" href="https://wizardly-hypatia-e267bd.netlify.app/" target="_blank">View Page</a>
                                                <a className="btn btn-project" href="https://github.com/binkei05011810/lights-out-game" target="_blank">Github</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="Project-img d-flex justify-content-center align-items-center order-1">
                                        <img className="img-fluid" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619194835/Webp.net-gifmaker_olbqpn.gif" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Project-container">
                            <div className="Project-item">
                                <div className="Project-inner">
                                    <div className="Project-img d-flex justify-content-center align-items-center order-1">
                                        <img className="img-fluid" src="https://res.cloudinary.com/minhkhue181001/image/upload/v1619195602/8674905b3c57ca65503d14f79fcc3b87_phrsot.gif" />
                                    </div>

                                    <div className="Project-description order-2">
                                        <div className="Project-detail">
                                            <div>
                                                <h3>I am trying <i className="fas fa-heart"></i></h3>
                                                <p>There are just 3 projects so far but there will be more in the future. I am trying hard day by day.</p>
                                            </div>

                                            <div className="Project-buttons">
                                                <a className="btn btn-project" href="https://github.com/binkei05011810" target="_blank">Follow my Github for Updates</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <a className="Header-button btn" href="#Certificate">See my Certificates and Expereicens</a>
                        </div>
                    </div>
                </div>
                <div className="Header-endline"></div>
            </section >
        )
    }
}

export default Project;