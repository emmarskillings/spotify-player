import * as actions from '../actions';

const albumsReducer = (
  state = {},
  // @ts-ignore
  action,
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
