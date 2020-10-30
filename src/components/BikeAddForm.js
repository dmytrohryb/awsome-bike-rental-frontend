import React from 'react'
import '../styles/BikeAddForm.css';
import {CustomButton} from "./CustomButton";
import Axios from "axios";
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export class BikeAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            price: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
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
//      <input type="text" id="bn" onChange={this.handleChangeName}/>
    render() {
        return<>
            <div className="title-card">
                Create new rent
            </div>
            <div className="card-content">
                <div className="input-name">
                    <label htmlFor="bn">Bike name</label>
                    <TextField size={"small"} id="outlined-basic" variant="outlined" />

                </div>

                <div className="input-type">
                    <label htmlFor="bt">Bike type</label>
                    <FormControl >
                        <NativeSelect
                            id="demo-customized-select-native"

                            variant="outlined"
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div className="input-price">
                    <label htmlFor="rp">Rent price</label>
                    <TextField size={"small"} id="outlined-basic" variant="outlined" />

                </div>

                <div className="submit">
                    <CustomButton name='Submit rent' type='success' />
                </div>
            </div>
            </>
    }
}
