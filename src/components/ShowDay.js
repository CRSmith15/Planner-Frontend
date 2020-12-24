import React from 'react'


const ShowDay = (props) => {

    return (
        <li>
            {props.day.date} - {props.day.time}
        </li>
    )
}

export default ShowDay