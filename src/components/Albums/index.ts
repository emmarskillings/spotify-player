import { connect } from 'react-redux';
import Albums from './Albums';

export type AlbumsStateProps = {
  albums: Object[],
  artist: string,
}

const mapStateToProps = (state: Object) => {
  const { albums: { albums, artist } } = state;

  return {
    albums,
    artist,
  };
};

const AlbumsContainer = connect(
  mapStateToProps,
  null,
)(Albums);

export default AlbumsContainer;
