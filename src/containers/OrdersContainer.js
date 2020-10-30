import React from "react";
import {Orders} from "../components/Orders";
import {connect} from 'react-redux'
import {changeData} from "../store/orders/actions";

class OrdersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Orders data={this.props.data} updateAvailableBikes={this.props.updateAvailableBikes} changeData={this.props.changeData} />
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
