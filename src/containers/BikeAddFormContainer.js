import React from "react";
import {BikeAddForm} from "../components/BikeAddForm";
import {connect} from 'react-redux'
import {changeData} from "../store/bikeAddForm/actions";

class AvailableBikesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <BikeAddForm data={this.props.data} changeData={this.props.changeData} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.availableBikes.data
    }
}

const mapDispatchToProps = {
    changeData
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableBikesContainer)
