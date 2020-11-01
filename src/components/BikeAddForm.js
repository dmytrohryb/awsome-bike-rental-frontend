import React from 'react'
import '../styles/BikeAddForm.css';
import {CustomButton} from "./CustomButton";
import Axios from "axios";
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

export class BikeAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            price: ''
        }

        this.handleSubmitRentButtonClick = this.handleSubmitRentButtonClick.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
    }

    componentWillMount() {
        Axios.get('http://localhost:4002/types')
            .then(res => {this.props.changeData(res.data)})
    }

    handleChangeName(e){
        this.setState({name: e.target.value})
    }

    handleChangePrice(e){
        this.setState({price: e.target.value})
    }

    handleChangeType(e){
        this.setState({type: e.target.value})
    }

    handleSubmitRentButtonClick(){
        Axios.post('http://localhost:4002/bikes', {
            name: this.state.name,
            type: this.state.type,
            price: this.state.price
        })
            .then(res => {
                this.props.addAvailableBike()
            })
    }

    render() {
        return<>
            <div className="title-card">
                Create new rent
            </div>
            <div className="card-content">
                <div className="input-name">
                    <label htmlFor="bn">Bike name</label>
                    <TextField size={"small"} id="outlined-basic" variant="outlined" onChange={this.handleChangeName} />

                </div>

                <div className="input-type">
                    <label htmlFor="bt">Bike type</label>
                    <FormControl>

                        <NativeSelect
                            id="demo-customized-select-native"
                            onChange={this.handleChangeType}
                            variant="outlined"
                        >
                            <option aria-label="None" value="" />
                            {
                                this.props.data.map(l =>
                                    <option key={l.id} value={l.id}>{l.name}</option>
                                )
                            }
                        </NativeSelect>
                    </FormControl>
                </div>

                <div className="input-price">
                    <label htmlFor="rp">Rent price</label>
                    <TextField size={"small"} id="outlined-basic" variant="outlined" onChange={this.handleChangePrice} />
                </div>

                <div className="submit">
                    <CustomButton onClick={this.handleSubmitRentButtonClick} name='Submit rent' type='success' />
                </div>
            </div>
            </>
    }
}
