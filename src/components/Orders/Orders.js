import React from 'react'
import '../../styles/Orders.css';
import Axios from "axios";
import TotalRent from '../../containers/TotalRentContainer';
import {OrderCard} from "./OrderCard";

export class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.handleClickCancel = this.handleClickCancel.bind(this)
    }

    componentWillMount() {
        this.getData()
        this.props.availableObserver.subscribe(this)
    }

    componentWillUnmount() {
        this.props.availableObserver.unsubscribe(this)
    }

    getData(){
        Axios.get('https://awesomebikerental.herokuapp.com/orders')
            .then(res => {
                this.props.changeData(res.data[1])
            })
    }

    handleClickCancel(id){
        Axios.delete('https://awesomebikerental.herokuapp.com/orders', {params: {bikeId: id}})
            .then(res => {
                this.getData()
                this.props.updateAvailableBikes()
                this.props.updateTotalRent()
            })
    }

    render() {
        return<>
            <div className="order-title">
                &#x1F929; <TotalRent totalRentObserver={this.props.totalRentObserver} />
            </div>
            {
                this.props.data.map((l, i) =>
                    <OrderCard handleClickCancel={this.handleClickCancel} className='order-card' key={i} name={l.name} type={l.type} price={l.price} countHours={l.countHours} id={l.id}/>
                )
            }
        </>
    }
}
