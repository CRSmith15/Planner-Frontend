import React from 'react'
import {Route, Link} from 'react-router-dom'

const DayList = (props) => {
    return (
        <div className="list-day">
            <Link to={'/days/new'}>Add a day</Link>
            {props.days.map(day => 
              <li key={day.id}>
                  <Link to={`/days/${day.id}`}>{day.date}</Link>
            </li> )}
        </div>
    )
}

export default DayList