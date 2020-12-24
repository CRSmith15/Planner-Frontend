import React from 'react'
import ShowDay from './ShowDay'

const DayList = (props) => {
    return (
        <div>
            {props.days.map(day => 
              <div key={day.id}><ShowDay day={day}/></div> )}
        </div>
    )
}

export default DayList