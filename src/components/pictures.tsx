import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { picturesSelector } from '../reducer';
import { Picture } from '../types/picture.type';

const Container = styled.div`
  padding: 1rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin: 10px;
  object-fit: contain;
  transition: transform 1s;
  max-width: fit-content;
  &:hover {
    transform: scale(1.2);
  }
`;
const Pictures = () => {
  const pictures = useSelector(picturesSelector);
  return (
    <Container>
       {pictures.map((pic: Picture, index: number) => (
          <img
            key={index}
            src={pic.previewFormat}
            alt={`Thumbnail by ${pic.author}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        ))}
     
    </Container>
  )
};

export default Pictures;
