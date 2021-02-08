import * as actions from '../actions';

const albumsReducer = (
  state = {},
  action: actions.SetAlbumsAction,
) => {
  switch (action.type) {
    case actions.SET_ALBUMS:
      const { albums, artistName } = action.payload;

      return {
        albums: albums.items,
        artist: artistName,
      };

    default:
      return state;
  }
};

export default albumsReducer;
