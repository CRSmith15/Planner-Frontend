import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import DayList from '../components/DayList'
import DayInput from '../components/DayInput'
import ShowDay from '../components/ShowDay'
import {fetchDays} from '../actions/fetchDays'


class DaysContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDays()
    }

    render() {
        return (
            <div>
                <Switch>
                  <Route path='/days/new' component={DayInput}/>
                  <Route path='/days/:id' render={(routerProps) => <ShowDay {...routerProps} days={this.props.days}/>}/>
                  <Route exact path='/days' render={(routerProps) => <DayList {...routerProps} days={this.props.days}/>}/>
                </Switch>
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