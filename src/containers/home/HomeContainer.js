// Should get Posts from Redux store
// Should import Widget components
// Renders LeftWidgets, Feed and RightWidgets components
// Pass Posts to Feed as props
// Pass Widget components to LeftWidgets and RightWidgets as props

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workoutActions';

const HomeContainer = ({ fetchWorkouts, workouts, loading }) => {
    
    useEffect(() => {
        fetchWorkouts();
    }, [])
    
    console.log("workouts =", workouts)
    
    if (loading) {
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);