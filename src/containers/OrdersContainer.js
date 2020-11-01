import React from "react";
import {Orders} from "../components/Orders/Orders";
import {connect} from 'react-redux'
import {changeData} from "../store/orders/actions";

class OrdersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Orders updateTotalRent={this.props.updateTotalRent} totalRentObserver={this.props.totalRentObserver} availableObserver={this.props.availableObserver} data={this.props.data} updateAvailableBikes={this.props.updateAvailableBikes} changeData={this.props.changeData} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.orders.data
    }
}

const mapDispatchToProps = {
    changeData
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)
