import React from 'react'
import '../styles/RentViewForm.css';
import {CustomButton} from "./CustomButton";
import Axios from "axios";

export class Orders extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        Axios.get('http://localhost:4002/bikes', {params: {available: false}})
            .then(res => {
                this.props.changeData(res.data)
            })
    }

    handleClickCancel(id){
        Axios.put('http://localhost:4002/bikes', {id: id, available: true})
            .then(res => {
                Axios.get('http://localhost:4002/bikes', {params: {available: false}})
                    .then(res => {
                        this.props.changeData(res.data)
                        this.props.updateAvailableBikes()
                    })
            })
    }

    render() {
        let data = []

        this.props.data.map(l => {
            l.bikes.forEach(elem => {
                data.push({id: elem.id, name: elem.name, type: l.name, price: elem.price})
            })
        })

        return<>
            <div className="title-card">
                Your rent (Total: 12.99$)
            </div>
            {
                data.map((l, i) =>
                    <div key={i} className="card">
                        <div className="content">
                            {l.name} / {l.type} / {l.price}$
                        </div>
                        <div className="actions">
                            <CustomButton onClick={() => this.handleClickCancel(l.id)} name='Delete' type='error'/>
                        </div>
                    </div>
                )
            }
        </>
    }
}
