import React from 'react'
import {connect} from 'react-redux'
import {addDay} from '../actions/addDay'


class DayInput extends React.Component {

    state = {date: '', time: ''}

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDay(this.state)
        this.setState({
            date: '',
            time: ''
        })
    }

    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date of Event: </label>
                    <input type='text' placeholder='Date' value={this.state.date} name='date' onChange={this.handleChange}/><br/>
                    <label>Time of Event: </label>
                    <input type='text' placeholder='Time' value={this.state.time} name='time' onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDay})(DayInput)