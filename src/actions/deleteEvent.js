export const deleteEvent = (eventId, dayId) => {


    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/days/${dayId}/events/${eventId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(day => dispatch({type: 'DELETE_EVENT', payload: day}))
    }



}