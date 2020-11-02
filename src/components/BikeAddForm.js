import React from 'react'
import '../styles/BikeAddForm.css';
import {CustomButton} from "./CustomButton";
import Axios from "axios";
import {FormErrors} from "./FormErrors";

export class BikeAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            price: '',
            error: '',
            priceValid: false
        }

        this.handleSubmitRentButtonClick = this.handleSubmitRentButtonClick.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
        this.validPrice = this.validPrice.bind(this)
    }

    componentWillMount() {
        Axios.get('http://localhost:4002/types')
            .then(res => {this.props.changeData(res.data)})
    }

    handleChangeName(e){
        this.setState({name: e.target.value})
    }

    validPrice(){
        if(!isNaN(this.state.price)){
            this.setState({priceValid: true, error: ''})
        }else{
            this.setState({priceValid: false, error: 'Price is not valid!'})
        }
    }

    handleChangePrice(e){
        this.setState({price: e.target.value}, () => {
            this.validPrice()
        })
    }

    handleChangeType(e){
        this.setState({type: e.target.value})
    }

    handleSubmitRentButtonClick(){
        if(this.state.priceValid){
            Axios.post('http://localhost:4002/bikes', {
                name: this.state.name,
                type: this.state.type,
                price: this.state.price
            })
                .then(res => {
                    if(res.status === 201){
                        this.props.addAvailableBike()
                        this.setState({error: ''})
                    }
                })
                .catch(err => {
                    this.setState({error: err.response.data['msg']})
                })
        }
    }

    render() {
        return<>
            <div className="form-title">
                &#x1F911; Create new rent
            </div>
            <FormErrors error={this.state.error} />
            <div className="form-content">
                <div className="input-name">
                    <label htmlFor="bn">Bike name</label>
                    <input id='bn' value={this.state.name} onChange={this.handleChangeName} />
                </div>

                <div className="input-type">
                    <label htmlFor="bt">Bike type</label>
                        <select
                            id="bt"
                            value={this.state.type}
                            onChange={this.handleChangeType}
                        >
                            <option aria-label="None" value="" />
                            {
                                this.props.data.map(l =>
                                    <option key={l.id} value={l.id}>{l.name}</option>
                                )
                            }
                        </select>
                </div>

                <div className="input-price">
                    <label htmlFor="rp">Rent price</label>
                    <input id='rp' value={this.state.price} onChange={this.handleChangePrice} />
                </div>

                <div className="submit-section">
                    <CustomButton onClick={this.handleSubmitRentButtonClick} name='Submit rent' type='success' />
                </div>
            </div>
            </>
    }
}
