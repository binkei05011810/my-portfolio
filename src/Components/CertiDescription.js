import React, { Component } from 'react'
import '../Styles/CertiDescription.css'

class CertiDescription extends Component {
    render() {
        return (
            <div className="CertiDescription">
                <div className="Certi-icon">
                    <img alt={`${this.props.item.title} logo`} className="img-fluid" src={this.props.item.icon} />
                </div>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <div className="Certi-img">
                    <img alt={`${this.props.item.title}`} className="img-fluid" src={this.props.item.src} />
                </div>
            </div>
        )
    }
}

export default CertiDescription;