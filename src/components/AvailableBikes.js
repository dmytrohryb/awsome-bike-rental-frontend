import React from 'react'
import '../styles/AvailableBicycles.css';
import {CustomButton} from "./CustomButton";
import {Separator} from "./Separator";
import Axios from "axios";

export class AvailableBikes extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        Axios.get('http://localhost:4002/bikes', {params: {available: true}})
            .then(res => {
                this.props.changeData(res.data)
            })
    }

    handleDelete(id){
        Axios.delete('http://localhost:4002/bikes', {
            params:{
                id: id
            }
        })
            .then(res => {
                Axios.get('http://localhost:4002/bikes', {params: {available: true}})
                    .then(res => {
                        this.props.changeData(res.data)
                    })
            })
    }

    update(){
        Axios.get('http://localhost:4002/bikes', {params: {available: true}})
            .then(res => {
                this.props.changeData(res.data)
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
                Available bicycles
            </div>
            {
                data.map((l, i) =>
                    <div key={i} className="card">
                        <div className="content">
                            {l.name} / {l.type} / {l.price}$
                        </div>
                        <div className="actions">
                            <CustomButton name='Rent' type='default'/>
                            <Separator type='horizontal' value={5} />
                            <CustomButton onClick={() => this.handleDelete(l.id)} name='Delete' type='error'/>
                        </div>
                    </div>
                )
            }
        </>
    }
}
