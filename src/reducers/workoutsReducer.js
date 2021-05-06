const manageWorkouts = (state = { list: [], current: {}, loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_WORKOUTS':
            return {
                ...state,
                list: [...state.list],
                loading: true
            }
    }
}

export default manageWorkouts;