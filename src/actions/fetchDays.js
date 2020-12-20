export function fetchDays() {
    
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/days')
      .then(resp => resp.json())
      .then(days => dispatch({
          type: 'FETCH_DAYS',
          payload: days
      }))
    }
}