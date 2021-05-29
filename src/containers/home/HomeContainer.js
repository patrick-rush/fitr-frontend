import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workoutActions';

const HomeContainer = ({ fetchWorkouts, workouts, loading, initialLoad }) => {
    
    useEffect(() => {
        fetchWorkouts();
    }, [])
    
    console.log("workouts =", workouts)
    
    if (!initialLoad || loading) {
        return (
            <div>Loading Thingy</div>
        )
    } else {
        return (
            <div>
                <div>Left Side Container Thingy</div>
                <div>{workouts[0].user.name}</div>
                <div>Right Side Container Thingy</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        workouts: state.workouts.list,
        loading: state.workouts.loading,
        initialLoad: state.workouts.initialLoad
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);