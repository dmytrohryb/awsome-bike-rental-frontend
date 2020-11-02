import React from 'react'
import Axios from "axios";

export class TotalRent extends React.Component{
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
    }

    componentWillMount() {
        this.getData()
        this.props.totalRentObserver.subscribe(this)
    }

    componentWillUnmount() {
        this.props.totalRentObserver.unsubscribe(this)
    }

    getData(){
        Axios.get('https://awesomebikerental.herokuapp.com/orders')
            .then(res => {this.props.changeData(res.data[0])})
    }

    render() {
        return<>
            Your rent (Total: {this.props.data}$)
        </>
    }
}
