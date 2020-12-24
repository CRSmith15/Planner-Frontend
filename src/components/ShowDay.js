import React from 'react'


const ShowDay = (props) => {

    let day = props.days[props.match.params.id - 1]

    return (
        <li>
            {day ? day.date : null} - {day ? day.time : null}
        </li>
    )
}

export default ShowDay