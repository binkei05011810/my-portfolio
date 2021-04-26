import React, { Component } from 'react'
import '../Styles/Skill.css'

class Skill extends Component {
    render() {
        return (
            <section id="Skill">
                <div className="Skill-wrap">
                    <div className="Skill-title d-flex align-items-center justify-content-center">
                        <h2>My Tech Stack</h2>
                    </div>
                    <div className="mt-5">
                        <div className="Skill-section container">
                            <div className="row mb-5">
                                <div className="col-sm-3 col-lg-2 Skill-circle">
                                    <div className="Skill-set">Languages</div>
                                </div>

                                <div className="col-sm-9 col-lg-9 offset-lg-1 Skill-imgs">
                                    <img alt="python badge" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" className="Skill-img" />
                                    <img alt="scala badge" src="https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white" className="Skill-img" />
                                    <img alt="c# badge" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" className="Skill-img" />
                                    <img alt="javascript badge" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" className="Skill-img" />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-sm-3 col-lg-2 Skill-circle">
                                    <div className="Skill-set">Front-End</div>
                                </div>

                                <div className="col-sm-9 col-lg-9 offset-lg-1 Skill-imgs">
                                    <img alt="html badge" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" className="Skill-img" />
                                    <img alt="css badge" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" className="Skill-img" />
                                    <img alt="javascript badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" className="Skill-img" />
                                    <img alt="react badge" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" className="Skill-img" />
                                    <img alt="bootstrap badge" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" className="Skill-img" />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-sm-3 col-lg-2 Skill-circle">
                                    <div className="Skill-set">Back-End</div>
                                </div>

                                <div className="col-sm-9 col-lg-9 offset-lg-1 Skill-imgs">
                                    <img alt="express badge" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" className="Skill-img" />
                                    <img alt="nodejs badge" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" className="Skill-img" />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-sm-3 col-lg-2 Skill-circle">
                                    <div className="Skill-set">Database</div>
                                </div>

                                <div className="col-sm-9 col-lg-9 offset-lg-1 Skill-imgs">
                                    <img alt="mongodb badge" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" className="Skill-img" />
                                    <img alt="sql badge" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" className="Skill-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <a className="Header-button btn" href="#Footer">Contact Me</a>
                    </div>
                </div>
                <div className="Header-endline"></div>
            </section>
        )
    }
}

export default Skill;