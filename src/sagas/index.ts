import {
  all,
  call,
  put,
  takeLatest,
  Effect,
} from 'redux-saga/effects';
import * as actions from '../actions';
import { get } from '../utils/api';

async function apiArtistSearch(artistName: string) {
  const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
    artistName
  )}&type=album,playlist,artist`;

  return await get(API_URL);
}

function* artistSearch({ payload }: actions.SearchArtistAction) {
  const { artistName } = payload;

  try {
    const result = yield call(apiArtistSearch, artistName);
    // @ts-ignore
    const { albums, artists } = result;

    yield all([
      put(actions.setAlbums(albums)),
      put(actions.setArtists(artists)),
  ])
  } catch (error) {
    console.log('error', error);
  }

}

const sagas = {
  * expectsArtistSearch(): Generator<Effect, void, void> {
    yield takeLatest(actions.SEARCH_ARTIST, artistSearch)
  }
}

export default sagas;
