import * as React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import { ArtistSearchDispatchProps, ArtistSearchStateProps } from './index';
import { ArtistCard } from "../Cards";

type ArtistSearchProps = ArtistSearchStateProps & ArtistSearchDispatchProps;

const ArtistSearch = ({ artists, onArtistsSearch, onAlbumsSearch }: ArtistSearchProps) => {
  const handleInputChange = (event: { target: { value: any; }; keyCode: number; }) => {
    const query = event.target.value;
    if (event.keyCode === 13) {
      handleSearchArtists(query)
    }
  }

  const handleSearchArtists = (searchQuery: string) => {
    if (searchQuery !== '') {
      onArtistsSearch(searchQuery);
    }
  }

  return (
    <>
      <Header />
      <Search>
        <SearchBar
          placeholder="Search for an artist..."
          // @ts-ignore
          onKeyUp={handleInputChange}
        />
      </Search>
      <Wrapper>
        {artists && artists.length > 0 && artists.map(artist => {
          return (
            <ArtistCard key={artist.uri} artist={artist} handleSearchAlbums={onAlbumsSearch}/>
          )
        })}
      </Wrapper>
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
  height: 40px;
  width: 400px;
  font-size: 18px;
  padding-left: 10px;
  border: 2px solid #222222;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  max-width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
`;
