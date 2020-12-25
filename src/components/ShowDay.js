import React from 'react'
import {Redirect} from 'react-router-dom'


const ShowDay = (props) => {

    let day = props.days[props.match.params.id - 1]

    return (
        <li>
            {day ? day.date : null} - {day ? day.time : null}
        </li>
    )
}

export default ShowDay