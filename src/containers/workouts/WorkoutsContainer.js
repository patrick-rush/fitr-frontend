import React from 'react';
import { connect } from 'react-redux';

const WorkoutsContainer = ({ workouts, loading }) => {
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
 
export default connect(mapStateToProps)(WorkoutsContainer);