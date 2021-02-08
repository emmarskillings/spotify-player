import * as actions from '../actions';

const albumsReducer = (
  state = {},
  // @ts-ignore
  action,
) => {
  switch (action.type) {
    case actions.SET_ALBUMS:
      return action.payload.albums.items;

    default:
      return state;
  }
};

export default albumsReducer;
