import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import HomeContainer from './containers/home/HomeContainer';
import ProfileContainer from './containers/profile/ProfileContainer';
import PostContainer from './containers/post/PostContainer';
import WorkoutsContainer from './containers/workouts/WorkoutsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} ></Route>
          <Route path="/:slug/posts/:postId" component={PostContainer} ></Route>
          <Route exact path="/:slug" component={ProfileContainer} ></Route>
          <Route exact path="/:slug/workouts" component={WorkoutsContainer} ></Route>
          {/* <Route path="/:slug/workouts/:workoutId" component={WorkoutShowContainer} ></Route>
          <Route path="/workout/new" component={NewWorkoutContainer} ></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;