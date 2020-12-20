export function fetchDays() {
    
    return (dispatch) => {
      console.log('inside fetch days')
      fetch('http://localhost:3001/api/v1/days')
      .then(resp => resp.json())
      .then(resp => console.log(resp))
    }
}