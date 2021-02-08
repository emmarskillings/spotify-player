import { connect } from 'react-redux';
import ArtistSearch from './ArtistSearch';

import * as actions from '../../actions';

export type ArtistSearchStateProps = {
  artists: Object[],
};

export type ArtistSearchDispatchProps = {
  onArtistsSearch: Function,
  onAlbumsSearch: Function,
};

const mapStateToProps = (state: Object) => {
  const { artists } = state;

  return {
    artists,
  };
};

const mapDispatchToProps = (dispatch: Function): ArtistSearchDispatchProps => ({
  onArtistsSearch: (searchQuery: string) => dispatch(actions.searchArtists(searchQuery)),
  onAlbumsSearch: (artistName: string) => dispatch(actions.searchAlbums(artistName)),
});

// Maps state and dispatch to ArtistSearch component
const ArtistSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistSearch);

export default ArtistSearchContainer;
