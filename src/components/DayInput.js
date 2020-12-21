import React from 'react'


class DayInput extends React.Component {

    state = {date: '', time: ''}

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }

    render(){
        return(
            <div>
                <form>
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

export default DayInput