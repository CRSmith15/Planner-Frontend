import React from 'react'
import {Route, Link} from 'react-router-dom'

const DayList = (props) => {
    return (
        <div>
            {props.days.map(day => 
              <li key={day.id}>
                  <Link to={`/days/${day.id}`}>{day.date}</Link> <button>Delete</button>
            </li> )}
        </div>
    )
}

export default DayList