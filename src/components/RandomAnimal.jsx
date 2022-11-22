import React from 'react'
import VectorInfo from "../assets/img/vectorInfo.png";
import { Arrow } from '../components/styles/InfoButton.styled';
import { InfoButton } from '../components/styles/InfoButton.styled';
import { Animal } from '../components/styles/Animal.styled';

function RandomAnimal(props) {
  return (
    <>
        <Animal src={props.image_link}/>
        <InfoButton>
          <Arrow src={VectorInfo}></Arrow>
        </InfoButton>
    </>
  )
}

export default RandomAnimal