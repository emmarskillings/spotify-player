import * as actions from './index';
import { get } from '../utils/api';

export const initiateGetResult = (searchTerm: string) => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;
      const result = await get(API_URL, {});
      const { albums, artists } = result;
      dispatch(actions.setAlbums(albums));
      dispatch(actions.setArtists(artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};