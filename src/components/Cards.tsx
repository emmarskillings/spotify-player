import * as React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const formatLongNumber = (number: number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

type ArtistCardProps = {
  artist: Object,
  handleSearchAlbums: Function,
}

export const ArtistCard = ({ artist, handleSearchAlbums }: ArtistCardProps) => {
  const history = useHistory();

  const handleSelectArtist = (artistName: string) => {
    handleSearchAlbums(artistName)
    history.push('/albums');
  };

  const followers = formatLongNumber(artist.followers.total);
  const popularity = Math.round(artist.popularity / 20);
  const stars = [];

  for (let i = 0; i < popularity; i++) {
    stars.push(i)
  }

  return (
    <Card onClick={() => handleSelectArtist(artist.name)}>
      <Image image={artist.images && artist.images[0] && artist.images[0].url} />
      <Details>
        <Name>{artist.name}</Name>
        <Followers>{followers} followers</Followers>
        <Popularity>
          {stars.map((star, index) => (
            <span key={index}>&#9733;</span>
          ))
          }
        </Popularity>
      </Details>
    </Card>
  )
}

type AlbumCardProps = {
  album: Object,
  artist: string,
}

export const AlbumCard = ({ album, artist }: AlbumCardProps) => {
  return (
    <Card>
      <Image image={album.images && album.images[0] && album.images[0].url} />
      <Details>
        <Name>{album.name}</Name>
        <Followers>{artist}</Followers>
        <Text>{album.release_date}</Text>
        <Text>{album.total_tracks}</Text>
      </Details>
      <SpotifyButton><a href={album.external_urls.spotify} target="_blank">Preview on Spotify</a></SpotifyButton>
    </Card>
  )
}

const Card = styled.div`
  min-height: 400px;
  width: 250px;
  background-color: lightgrey;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const Image = styled.div<{ image: string }>`
  height: 250px;
  width: 100%;
  background-color: black;
  background-image: url(${ props => props.image });
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Details = styled.div`
  max-width: 100%;
  padding: 10px 15px;
`;

const Name = styled.div`
  font-size: 18px;
`;

const Followers = styled.div`
  font-size: 14px;
  padding: 5px 0;
`;

const Popularity = styled.div`
  font-size: 18px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const SpotifyButton = styled.button`
`;