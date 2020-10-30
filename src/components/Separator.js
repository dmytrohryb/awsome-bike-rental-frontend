import React from 'react'

export class Separator extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (this.props.type === 'vertical') ?
        <div style={{marginTop: this.props.value, marginBottom: this.props.value}} /> :
            <div style={{marginLeft: this.props.value, marginRight: this.props.value}} />
    }
}
