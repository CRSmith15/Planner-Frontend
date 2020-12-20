import React from 'react'

const DayList = (props) => {
    return (
        <div>
            {props.days.map(day => <li key={day.id}>{day.date} - {day.time}</li> )}
        </div>
    )
}

export default DayList