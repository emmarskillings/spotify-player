import * as React from 'react';
import styled from 'styled-components';

import Header from "../Header";

type ArtistSearchProps = {
  handleSearch: Function,
}

const ArtistSearch = ({ handleSearch }: ArtistSearchProps) => {
  const [ artistName, setArtistName ] = React.useState('');
  const [ message, setMessage ] = React.useState('');

  const handleArtistSearch = (event: {
    keyCode: number;
    target: { value: any; };
    preventDefault: () => void; }) => {
    event.preventDefault();

    const name = event.target.value;
    if (event.keyCode === 13) {
      setArtistName(name);
    }

    if (artistName !== '') {
      setMessage('');
      handleSearch(artistName);
    } else {
      setMessage('Please enter an artist\'s name')
    }
  }

  console.log(artistName)
  return (
    <>
      <Header />
      <Search>
        <SearchBar
          placeholder="Search for an artist"
          // @ts-ignore
          onKeyUp={handleArtistSearch}
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
