import React from 'react'
import {connect} from 'react-redux'
import {addEvent} from '../actions/addEvent'

class EventInput extends React.Component {

    state = {
        activity: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEvent(this.state, this.props.day.id)
        this.setState({
            activity: '',
            description: ''
        })
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Event activity:  </label>
                    <input type='text' placeholder='activity' name='activity' value={this.state.activity} onChange={this.handleChange}/><br/>
                    <label>Description:  </label>
                    <input type='text' placeholder='description' name='description' value={this.state.description} onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null, {addEvent})(EventInput)