import React from 'react'
import '../../styles/RentViewForm.css';
import {CustomButton} from "../CustomButton";
import Axios from "axios";
import TotalRent from '../../containers/TotalRentContainer';

export class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
    }

    componentWillMount() {
        this.getData()
        this.props.availableObserver.subscribe(this)
    }

    componentWillUnmount() {
        this.props.availableObserver.unsubscribe(this)
    }

    getData(){
        Axios.get('http://localhost:4002/orders')
            .then(res => {
                this.props.changeData(res.data[1])
            })
    }

    handleClickCancel(id){
        Axios.delete('http://localhost:4002/orders', {params: {bikeId: id}})
            .then(res => {
                this.getData()
                this.props.updateAvailableBikes()
                this.props.updateTotalRent()
            })
    }

    render() {
        return<>
            <div className="title-card">
                <TotalRent totalRentObserver={this.props.totalRentObserver} />
            </div>
            {
                this.props.data.map((l, i) =>
                    <div key={i} className="card">
                        <div className="content">
                            {l.name} / {l.type} / {l.price}$
                        </div>
                        <div className="actions">
                            <div>
                                Hours: {l.countHours}
                            </div>
                            <CustomButton onClick={() => this.handleClickCancel(l.id)} name='Cancel rent' type='error'/>
                        </div>
                    </div>
                )
            }
        </>
    }
}
