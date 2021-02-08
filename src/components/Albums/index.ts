import { connect } from 'react-redux';
import Albums from './Albums';

export type AlbumsStateProps = {
  albums: Object[],
  artist: string,
};

const mapStateToProps = (state: Object) => {
  const { albums } = state;

  return {
    albums
  };
};

// Maps state and dispatch to Albums component
const AlbumsContainer = connect(
  mapStateToProps,
  null,
)(Albums);

export default AlbumsContainer;
