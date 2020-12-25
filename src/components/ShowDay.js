import React from 'react'
import {Redirect} from 'react-router-dom'

import EventsContainer from '../containers/EventsContainer'


const ShowDay = (props) => {

    let day = props.days[props.match.params.id - 1]

    return (
        <div>
          <h2>
              {day ? day.date : null} - {day ? day.time : null}
          </h2>
          <EventsContainer/>
        </div>
    )
}

export default ShowDay