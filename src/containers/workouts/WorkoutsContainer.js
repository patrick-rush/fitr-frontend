import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workoutActions';

const WorkoutsContainer = ({ workouts, loading, fetchWorkouts }) => {
    useEffect(() => {
        fetchWorkouts();
    },[])
    
    return ( 
        <div>
            LeftWidgets Thingy
            WorkoutsContainer
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