import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workoutActions';

const WorkoutsContainer = ({ workouts, loading, fetchWorkouts }) => {
    useEffect(() => {
        fetchWorkouts();
    },[])
    
    const renderWorkouts = () => {
        return workouts.map(workout => {
            return (
                <div>
                    <h1>{workout.user.name}</h1>
                    <h3>Exercises</h3>
                    {workout.exercises.map(exercise => {
                        return (
                            <p>{exercise.name}</p>
                        )
                    })}
                </div>
            )
        })
    } 

    return ( 
        <div>
            LeftWidgets Thingy
            {renderWorkouts()}
            RightWidgets Thingy
        </div>
     );
}

const mapStateToProps = state => {
    return {
        workouts: state.workouts.list,
        loading: state.workouts.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);