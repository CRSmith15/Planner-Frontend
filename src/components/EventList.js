import React from 'react'

const EventList = (props) => {

    return (
        <div>
            {props.events && props.events.map(event =>
                <li key={event.id}>{event.activity} - {event.description}</li>
            )}
        </div>
    )
}


export default EventList