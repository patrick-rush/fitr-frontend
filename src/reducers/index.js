import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer';

export default combineReducers({
    workouts: workoutsReducer
});