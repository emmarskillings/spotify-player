import * as actions from '../actions';

const artistsReducer = (
  state = {},
  // @ts-ignore
  action,
) => {
  switch (action.type) {
    case actions.SET_ARTISTS:
      return action.payload.artists;

    default:
      return state;
  }
};

export default artistsReducer;
