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

export const createWorkout = (data) => {
    return dispatch => {
        fetch('http://localhost:3001/workouts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({workout: data}),
        })
        .then(response => response.json())
        .then(data => {
        dispatch({ type: 'CREATE_WORKOUT', workout: data })
        })
    }
}