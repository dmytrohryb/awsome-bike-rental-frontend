import React from "react";
import {BikeAddForm} from "../components/BikeAddForm";
import {connect} from 'react-redux'
import {changeData} from "../store/bikeAddForm/actions";

class AvailableBikesContainer extends React.Component {

    render() {
        return <BikeAddForm addAvailableBike={this.props.addAvailableBike} data={this.props.data} changeData={this.props.changeData} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.bikeAddForm.data
    }
}

const mapDispatchToProps = {
    changeData
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableBikesContainer)
