import React from 'react'
import '../styles/CustomButton.css'

export class CustomButton extends React.Component{
    render() {
        return <button type="button" onClick={this.props.onClick} className={this.props.type}>{this.props.name}</button>
    }
}
