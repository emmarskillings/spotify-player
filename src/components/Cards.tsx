import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SpotifyIconWhite from '../images/Spotify_Icon_RGB_White.png';

const formatLongNumber = (number: number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

type ArtistCardProps = {
  artist: Object,
  handleSearchAlbums: Function,
};

// Cards displayed on /artist-search page
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
    <CardWrapper onClick={() => handleSelectArtist(artist.name)}>
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
    </CardWrapper>
  );
};

type AlbumCardProps = {
  album: Object,
  artist: string,
};

// Cards displayed on /albums page
export const AlbumCard = ({ album, artist }: AlbumCardProps) => {
  const date = album.release_date;

  return (
    <AlbumCardWrapper>
      <div>
        <Image image={album.images && album.images[0] && album.images[0].url} />
        <Details>
          <Name>{album.name}</Name>
          <Followers>{artist}</Followers>
          <Text>{date}</Text>
          <Text>{album.total_tracks} tracks</Text>
        </Details>
      </div>
      <SpotifyButton>
        <Link href={album.external_urls.spotify} target="_blank">PLAY ON SPOTIFY</Link>
        <SpotifyIcon />
      </SpotifyButton>
    </AlbumCardWrapper>
  );
};

const CardWrapper = styled.div`
  min-height: 350px;
  width: 250px;
  background-color: #222222;
  color: white;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const AlbumCardWrapper = styled(CardWrapper)`
  height: 425px;
  justify-content: space-between;
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
  padding: 5px 0 15px 0;
`;

const Popularity = styled.div`
  font-size: 18px;
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
`;

const SpotifyButton = styled.div`
  height: 40px;
  background-color: #1DB954;
  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  line-height: 40px;
  font-size: 14px;
`;

const SpotifyIcon = styled.div`
  height: 21px;
  width: 21px;
  margin: 10px 0 0 10px;
  background-image: url(${SpotifyIconWhite});
  background-size: cover;
`;