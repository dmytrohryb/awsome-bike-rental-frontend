import {Separator} from "../Separator";
import {CustomButton} from "../CustomButton";
import React from "react";
import '../../styles/OrderCard.css'

export class OrderCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return<div className={this.props.className}>
            <div className="text-card">
                {this.props.name} / {this.props.type} / {this.props.price}$ / {(this.props.countHours >= 20) ? 'Discount - 50%' : 'Discount - 0%'}
            </div>
            <div className="right-side">
                <div className="hours-block text-card">
                    Hours: {this.props.countHours}
                </div>
                <Separator type='horizontal' value={10} />
                <div className='button-group'>
                    <CustomButton onClick={() => this.props.handleClickCancel(this.props.id)} name='Cancel rent' type='error'/>
                </div>
            </div>
        </div>
    }
}
