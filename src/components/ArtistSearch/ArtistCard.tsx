import * as React from 'react';
import styled from 'styled-components';

const formatLongNumber = (number: number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const ArtistCard = ({ artist }: Object) => {
  const followers = formatLongNumber(artist.followers.total);
  const popularity = Math.round(artist.popularity / 20);
  const stars = [];

  for (let i = 0; i < popularity; i++) {
    stars.push(i)
  }

  return (
    <Card>
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

export default ArtistCard;

const Card = styled.div`
  height: 350px;
  width: 250px;
  background-color: lightgrey;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const Image = styled.div<{ image: string }>`
  height: 75%;
  width: 100%;
  background-color: black;
  background-image: url(${ props => props.image });
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Details = styled.div`
  max-width: 100%;
  padding: 5px;
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