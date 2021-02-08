export const SEARCH_ARTISTS = 'Searching for artists...';
export const SET_ARTISTS = 'Setting artists.';
export const SEARCH_ALBUMS = 'Searching for albums...';
export const SET_ALBUMS = 'Setting albums.';

export const searchArtists = (searchQuery: string) => ({
  type: SEARCH_ARTISTS,
  payload: { searchQuery },
});

export const setArtists = (artists: Object) => ({
  type: SET_ARTISTS,
  payload: { artists },
} as const );

export const searchAlbums = (artistName: string) => ({
  type: SEARCH_ALBUMS,
  payload: { artistName },
})

export const setAlbums = (albums: Object, artistName: string) => ({
  type: SET_ALBUMS,
  payload: { albums, artistName },
} as const);

export type SearchArtistsAction = ReturnType<typeof searchArtists>;
export type SetArtistsAction = ReturnType<typeof setArtists>;
export type SearchAlbumsAction = ReturnType<typeof searchAlbums>;
export type SetAlbumsAction = ReturnType<typeof setAlbums>;
