import React from 'react'
import Axios from "axios";
import {AvailableBikeCard} from "./AvailableBikeCard";
import '../../styles/AvailableBikes.css'
import {Separator} from "../Separator";

export class AvailableBikes extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
        this.handleRentButtonClick = this.handleRentButtonClick.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentWillMount() {
        this.getData()
        this.props.ordersObserver.subscribe(this)
        this.props.addFormObserver.subscribe(this)
    }

    componentWillUnmount() {
        this.props.ordersObserver.unsubscribe(this)
        this.props.addFormObserver.unsubscribe(this)
    }

    getData(){
        Axios.get('http://localhost:4002/bikes', {params: {available: true}})
            .then(res => {this.props.changeData(res.data)})
    }

    handleDeleteButtonClick(id){
        Axios.delete('http://localhost:4002/bikes', {params:{id: id}})
            .then(res => {
                this.getData()
            })
    }

    handleRentButtonClick(id, price, countHours){
        console.log(price / 2)
        Axios.post('http://localhost:4002/orders', {
            discountPrice: (countHours >= 20) ? price / 2 : price,
            countHours: countHours,
            bikeId: id
        })
            .then(res => {
                this.getData()
                this.props.updateOrders()
                this.props.updateTotalRent()
            })
    }

    render() {
        return<>
            <div className='available-title'>
                &#x1F6B2; Available bikes ({this.props.data.length})
            </div>
            {
                this.props.data.map((l, i) => <>
                    <Separator type='vertical' value={10}/>
                    <AvailableBikeCard
                        className='available-card'
                        handleDelete={this.handleDeleteButtonClick}
                        handleRent={this.handleRentButtonClick}
                        key={i}
                        id={l.id}
                        name={l.name}
                        type={l.type}
                        price={l.price}
                    />
                    </>
                )
            }
        </>
    }
}
