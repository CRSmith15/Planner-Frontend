import React from 'react'
import {connect} from 'react-redux';
import dayReducer from '../reducers/dayReducer'
import DayList from '../components/DayList'
import DayInput from '../components/DayInput'
import {fetchDays} from '../actions/fetchDays'


class DaysContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDays()
    }

    render() {
        return (
            <div>
                <DayInput/>
                <DayList/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        days: state.days
    }
}

export default connect(mapStateToProps, {fetchDays})(DaysContainer)