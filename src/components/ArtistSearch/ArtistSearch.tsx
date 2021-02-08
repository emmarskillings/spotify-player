import * as React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import {ArtistSearchDispatchProps, ArtistSearchStateProps} from './index';
import ArtistCard from "./ArtistCard";

type ArtistSearchProps = ArtistSearchStateProps & ArtistSearchDispatchProps;

const ArtistSearch = ({ artists, onArtistSearch }: ArtistSearchProps) => {
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
      onArtistSearch(artistName);
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
      <Artists>
        {artists && artists.length > 0 && artists.map(artist => {
          return (
            <ArtistCard key={artist.uri} artist={artist} />
          )
        })}
      </Artists>
      <Message>{message !== '' && message}</Message>
    </>
  );
}

export default ArtistSearch;

const Search = styled.div`
  width: 100vw;
  margin: 40px 0 20px 0;
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

const Artists = styled.div`
  max-width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
`;

const Message = styled.div`
`;
