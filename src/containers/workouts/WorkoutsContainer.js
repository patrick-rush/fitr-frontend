import React from 'react';
import { connect } from 'react-redux';

const WorkoutsContainer = ({ workouts, loading, fetchWorkouts }) => {
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