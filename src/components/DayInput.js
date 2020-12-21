import React from 'react'


class DayInput extends React.Component {

    render(){
        return(
            <div>
                <form>
                    <label>Date of Event: </label>
                    <input type='text' placeholder='Date'/><br/>
                    <label>Time of Event: </label>
                    <input type='text' placeholder='Time'/>
                </form>
            </div>
        )
    }
}

export default DayInput