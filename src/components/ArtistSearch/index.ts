import { connect } from 'react-redux';
import ArtistSearch from './ArtistSearch';

import * as actions from '../../actions';

export type ArtistSearchStateProps = {
  artists: Object[],
}

export type ArtistSearchDispatchProps = {
  onArtistSearch: Function,
}

const mapStateToProps = (state: Object) => {
  const { artists } = state;

  return {
    artists,
  };
};

const mapDispatchToProps = (dispatch: Function): ArtistSearchDispatchProps => ({
  onArtistSearch: (artistName: string) => dispatch(actions.searchArtist(artistName)),
});

const ArtistSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistSearch);

export default ArtistSearchContainer;
