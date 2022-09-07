import React from 'react'
import { Logo } from '../components/styles/Logo.styled'
import LogoImg from "../assets/img/logo.svg";
import { Animal } from '../components/styles/Animal.styled';

function List() {
  return (
    <>
    <Logo src={LogoImg} alt="Logo"></Logo>
    <Animal src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Blue-crowned_Laughingthrush_10.jpg/2560px-Blue-crowned_Laughingthrush_10.jpg" alt="Bird"/>
    </>
  )
}

export default List