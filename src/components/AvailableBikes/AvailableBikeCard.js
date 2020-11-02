import {CustomButton} from "../CustomButton";
import {Separator} from "../Separator";
import React from "react";
import '../../styles/AvailableBikesCard.css';
import {FormErrors} from "../FormErrors";

export class AvailableBikeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countHours: 0,
            error: '',
            countValid: false
        }
        this.handleChangeCountHours = this.handleChangeCountHours.bind(this)
        this.validCount = this.validCount.bind(this)
    }

    validCount(){
        if(!isNaN(this.state.countHours)){
            this.setState({countValid: true, error: ''})
        }else{
            this.setState({countValid: false, error: 'Hours is not valid!'})
        }
    }

    handleChangeCountHours(e){
        this.setState({countHours: e.target.value}, () => {
            this.validCount()
        })
    }

    render() {
        return<>
            <Separator type='vertical' value={10}/>
            <FormErrors error={this.state.error} />
            <div className={this.props.className}>
            <div className="text-card">
                {this.props.name} / {this.props.type} / {this.props.price}$
            </div>
            <div className="right-side">
                <div className='input-hours-block'>
                    <div className='text-card'>Duration</div>
                    <Separator type='horizontal' value={5} />
                    <input type='text' className='input-hours' value={this.state.countHours} onChange={this.handleChangeCountHours}/>
                    <Separator type='horizontal' value={5} />
                    <div className='text-card'>hours</div>
                </div>

                <div className='button-group'>
                    <CustomButton onClick={() => {
                        if(this.state.countValid && this.state.countHours > 0){
                            this.props.handleRent(this.props.id, this.props.price, this.state.countHours)
                        }
                    }} name='Rent' type='default'/>
                    <Separator type='horizontal' value={5} />
                    <CustomButton onClick={() => this.props.handleDelete(this.props.id)} name='Delete' type='error'/>
                </div>
            </div>
        </div>
        </>
    }
}
