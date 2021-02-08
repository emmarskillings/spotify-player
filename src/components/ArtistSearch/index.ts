import { connect } from 'react-redux';
import ArtistSearch from './ArtistSearch';

import * as actions from '../../actions';

const mapStateToProps = (state: Object) => {
  const { artists } = state;

  return artists;
};

export type ArtistSearchDispatchProps = {
  onArtistSearch: Function,
}

const mapDispatchToProps = (dispatch: Function): ArtistSearchDispatchProps => ({
  onArtistSearch: (artistName: string) => dispatch(actions.searchArtist(artistName)),
});

const ArtistSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistSearch);

export default ArtistSearchContainer;
