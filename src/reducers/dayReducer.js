export default function dayReducer(state = {days: []}, action) {
    switch (action.type) {
        case 'FETCH_DAYS':
            return {days: action.payload} 
        default:
            return state
    }
    
}