import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log('what is ', action, state);
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
