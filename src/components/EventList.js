import React from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../actions/deleteEvent'

const EventList = (props) => {


    const handleDelete = (task) =>{
        props.deleteEvent(task.id, task.day_id)
    }

    return (
        <div>
            {props.events && props.events.map(task =>
                <li key={task.id}>{task.activity} - {task.description} <button onClick={() => handleDelete(task)}>Delete</button></li>
            )}
        </div>
    )
}


export default connect(null, {deleteEvent})(EventList)