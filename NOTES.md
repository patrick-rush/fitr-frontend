# FITR Notes
Below are notes on the apps functionality to keep us on track. Feel free to add any notices or thoughts

## Notices
- Working on setting up Redux actions/reducers for workouts

## Components
##### /components
---
### Nav
##### /components/Nav.js
Displays clickable icons for home, profile, workouts, settings, notifications and messages

## Widgets 
##### /components/widgets

Widgets are rendered on LeftWidgets and RightWidgets components

---
### Workout Widget
##### /components/widgets/WorkoutWidget.js
Should receive authenticated user's workouts as a prop and display the 3 most recent workouts


### Workouts Container
- Connects to redux store
- Receives workouts object as prop
- Renders Widgets and Feed
- Feed receives workouts as prop
- LeftWidget receives 'data' as prop
- RightWidget receives 'data' as prop