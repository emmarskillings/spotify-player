export const SET_ALBUMS = 'Setting albums.';
export const ADD_ALBUMS = 'Adding albums.';
export const SET_ARTISTS = 'Setting artists';
export const ADD_ARTISTS = 'Adding artists';

export const setAlbums = (albums: Object) => ({
  type: SET_ALBUMS,
  payload: { albums },
} as const);

export const addAlbums = (albums: Object) => ({
  type: ADD_ALBUMS,
  payload: { albums },
} as const);

export const setArtists = (artists: Object) => ({
  type: SET_ARTISTS,
  payload: { artists },
} as const );

export const addArtists = (artists: Object) => ({
  type: ADD_ARTISTS,
  payload: { artists},
});

export type SetAlbumsAction = ReturnType<typeof setAlbums>;
export type AddAlbumsAction = ReturnType<typeof addAlbums>;
export type SetArtistsAction = ReturnType<typeof setArtists>;
export type AddARtistsAction = ReturnType<typeof addArtists>;

export type Actions =
  | SetAlbumsAction
  | AddAlbumsAction
  | SetArtistsAction
  | AddARtistsAction;