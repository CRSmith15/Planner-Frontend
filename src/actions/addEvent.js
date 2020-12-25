export const addEvent = (event, dayId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/days/${dayId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(resp => resp.json())
        .then(day => dispatch({type: 'ADD_EVENT', payload: day}))
    }
}