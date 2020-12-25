import React from 'react'
import EventInput from '../components/EventInput'
import EventList from '../components/EventList'


class EventsContainer extends React.Component {

    render() {
        return (
            <div>
                <EventInput/>
                <EventList events={this.props.day && this.props.day.events}/>
            </div>
        )
    }
}

export default EventsContainer