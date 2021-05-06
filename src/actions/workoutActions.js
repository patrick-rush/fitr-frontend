export const fetchWorkouts = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_WORKOUTS'})
        fetch('http://localhost:3001/workouts')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'GET_WORKOUTS', workouts: responseJSON })
        })
    }
}

export const fetchWorkout = (id) => {
    return dispatch => {
      dispatch({ type: 'LOADING_WORKOUT'})
      fetch(`http://localhost:3001/workouts/${id}`)
      .then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'GET_WORKOUT', workout: responseJSON })
      })
    }
}