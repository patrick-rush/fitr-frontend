const manageWorkouts = (state = { list: [], current: {}, initialLoad: false, loading: true }, action) => {
    switch(action.type) {
        case 'LOADING_WORKOUTS':
            return {
                ...state,
                list: [...state.list],
                loading: true
            }
        case 'LOADING_WORKOUT':
            return {
                ...state,
                current: state.current,
                loading: true
            }
        case 'GET_WORKOUTS':
            return {
                ...state,
                list: action.workouts.reverse(),
                initialLoad: true,
                loading: false
            }
        case 'GET_WORKOUT':
            return {
                ...state,
                list: [ action.workout, ...state.list ]
            }
        case 'CREATE_WORKOUT':
        return {
            ...state,
            list: [ action.workout, ...state.list ]
        }
        default:
            return state;
    }
}

export default manageWorkouts;