import {
  all,
  call,
  put,
  takeLatest,
  Effect,
} from 'redux-saga/effects';
import * as actions from '../actions';
import { get } from '../utils/api';

async function apiArtistSearch(searchQuery: string) {
  const API_URL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    searchQuery
  )}&type=artist`;

  return await get(API_URL);
}

async function apiAlbumSearch(artistName: string) {
  const API_URL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    artistName
  )}&type=album`;

  return await get(API_URL);
}

function* artistSearch({ payload }: actions.SearchArtistsAction) {
  const { searchQuery } = payload;

  try {
    const result = yield call(apiArtistSearch, searchQuery);
    const { artists } = result;

    yield put(actions.setArtists(artists));
  } catch (error) {
    console.log('error', error);
  }
}

function* albumSearch({ payload }: actions.SearchAlbumsAction) {
  const { artistName } = payload;

  try {
    const result = yield call(apiAlbumSearch, artistName);
    const { albums } = result;

    yield put(actions.setAlbums(albums, artistName));
  } catch (error) {
    console.log('error', error);
  }
}

const sagas = {
  * expectsArtistsSearch(): Generator<Effect, void, void> {
    yield takeLatest(actions.SEARCH_ARTISTS, artistSearch)
  },
  * expectsAlbumsSearch(): Generator<Effect, void, void> {
    yield takeLatest(actions.SEARCH_ALBUMS, albumSearch)
  },
}

export default sagas;
