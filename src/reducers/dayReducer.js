export default function dayReducer(state = {days: []}, action) {
    switch (action.type) {
        case 'FETCH_DAYS':
            return {days: action.payload} 
        case 'ADD_DAY':
            return {...state, days: [...state.days, action.payload]}
        case 'ADD_EVENT':
            return {...state, days: state.days.map(day => {
                if (day.id === action.payload.id) {
                    return action.payload
                } else {
                    return day
                }
            })}
        case 'DELETE_EVENT':
            debugger;
            return {...state, days: state.days.map(day => {
                if (day.id === action.payload.id) {
                    return action.payload
                } else {
                    return day
                }
            })}
        default:
            return state
    }
    
}