import * as React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import {ArtistSearchDispatchProps} from './index';

const ArtistSearch = (props: ArtistSearchDispatchProps) => {
  const [ artistName, setArtistName ] = React.useState('');
  const [ message, setMessage ] = React.useState('');

  const handleInputChange = (event: { target: { value: any; }; keyCode: number; }) => {
    const name = event.target.value;
    if (event.keyCode === 13) {
      setArtistName(name);
      handleArtistSearch()
    }
  }

  const handleArtistSearch = () => {
    if (artistName !== '') {
      setMessage('');
      props.onArtistSearch(artistName);
    } else {
      setMessage('Please enter an artist\'s name')
    }
  }
  return (
    <>
      <Header />
      <Search>
        <SearchBar
          placeholder="Search for an artist"
          // @ts-ignore
          onKeyUp={handleInputChange}
        />
      </Search>
      <Message>{message !== '' && message}</Message>
    </>
  );
}

export default ArtistSearch;

const Search = styled.div`
  width: 100vw;
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  margin: auto;
  height: 30px;
  width: 400px;
  font-size: 16px;
  padding-left: 10px;
`;

const Message = styled.div`
`;
