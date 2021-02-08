import * as React from 'react';
import styled from 'styled-components';

import Header from "../Header";
import { Wrapper } from "../ArtistSearch/ArtistSearch";
import { AlbumCard } from '../Cards';
import { AlbumsStateProps } from './index';


const Albums = ({ albums, artist }: AlbumsStateProps) => (
  <>
    <Header />
    <Title>
      <Artist>{artist}</Artist>
      Albums
    </Title>
    <Wrapper>
      {albums && albums.length > 0 && albums.map(album => (
        <AlbumCard key={album.uri} album={album} artist={artist} />
      ))}
    </Wrapper>
  </>
);

export default Albums;

const Title = styled.div`
  padding: 40px 40px 20px 40px;
`;

const Artist = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;
