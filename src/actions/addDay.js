export const addDay = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/days', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(day => dispatch({type: 'ADD_DAY', payload: day}))
    }
}