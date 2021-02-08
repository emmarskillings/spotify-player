import * as actions from '../actions';

const albumsReducer = (
  state = {},
  action: actions.SetAlbumsAction,
) => {
  switch (action.type) {
    case actions.SET_ALBUMS:
      return {
        albums: action.payload.albums.items,
        artist: action.payload.artistName,
      }

    default:
      return state;
  }
};

export default albumsReducer;
