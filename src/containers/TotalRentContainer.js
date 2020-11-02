import React from "react";
import {TotalRent} from "../components/Orders/TotalRent";
import {connect} from 'react-redux'
import {changeData} from "../store/totalRent/actions";

class TotalRentContainer extends React.Component {

    render() {
        return <TotalRent totalRentObserver={this.props.totalRentObserver} data={this.props.data} changeData={this.props.changeData} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.totalRent.data
    }
}

const mapDispatchToProps = {
    changeData
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalRentContainer)
