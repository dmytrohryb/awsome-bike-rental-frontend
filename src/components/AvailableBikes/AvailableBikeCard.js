import {CustomButton} from "../CustomButton";
import {Separator} from "../Separator";
import React from "react";

export class AvailableBikeCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            countHours: 0
        }
        this.handleChangeCountHours = this.handleChangeCountHours.bind(this)
    }

    handleChangeCountHours(e){
        this.setState({countHours: e.target.value})
    }

    render() {
        return<div className="card">
            <div className="content">
                {this.props.name} / {this.props.type} / {this.props.price}$
            </div>
            <div className="actions">
                <input type='text' onChange={this.handleChangeCountHours}/>
                <Separator type='horizontal' value={5} />
                <CustomButton onClick={() => this.props.handleRent(this.props.id, this.props.price, this.state.countHours)} name='Rent' type='default'/>
                <Separator type='horizontal' value={5} />
                <CustomButton onClick={() => this.props.handleDelete(this.props.id)} name='Delete' type='error'/>
            </div>
        </div>
    }
}
