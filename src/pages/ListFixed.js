import React from 'react'
import LogoImg from "../assets/img/logo.svg";
import { Container } from '../components/styles/Container.styled';
import { LogoList } from '../components/styles/LogoList.styled';
import { NextButton } from '../components/styles/NextButton.styled';
import RandomAnimal from '../components/RandomAnimal';

function ListFixed() {
  return (
    <>
      
      <div>
        <LogoList src={LogoImg} alt="Logo"></LogoList>
        
      </div>
      <Container>
        <NextButton>Next</NextButton>
        <RandomAnimal/>
      </Container>
    </>
  )
}

export default ListFixed