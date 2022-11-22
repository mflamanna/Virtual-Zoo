import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import RandomAnimal from '../components/RandomAnimal';
import { LogoList } from '../components/styles/LogoList.styled';
import LogoImg from "../assets/img/logo.svg";
import { Container } from '../components/styles/Container.styled';
import { NextButton } from '../components/styles/NextButton.styled';
import { LineList } from '../components/styles/LineList.styled';
import { Link } from 'react-router-dom';



export default function List() {
  const [animalsData, setAnimalsData] = useState([]);
    useEffect (()=>{
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .then ((res)=> {
            setAnimalsData(res.data)
        })

    },[])

    function refreshPage() {
      window.location.reload(false);
    }

    console.log(animalsData)
  return (
    <>
    <Link to='/'>
      <LogoList src={LogoImg} alt="Logo"></LogoList>
    </Link>
    <Container>
      <NextButton onClick={refreshPage}>Next</NextButton>
      <LineList/>
           {animalsData.map((item, index)=>(
            <>
           <RandomAnimal key={index} image_link={item.image_link}/>
         </>
          ))}
             
    </Container>
    </>
  )
}
