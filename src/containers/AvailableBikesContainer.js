import React from "react";
import {AvailableBikes} from "../components/AvailableBikes";
import {connect} from 'react-redux'
import {changeData} from "../store/availableBikes/actions";

class AvailableBikesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AvailableBikes data={this.props.data} changeData={this.props.changeData} />
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
