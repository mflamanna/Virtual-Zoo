import BodyHome from "../components/BodyHome";
import Img from "../components/Img";
import { Container } from "../components/styles/Container.styled";
import { Logo } from "../components/styles/Logo.styled";
import { StartButton } from "../components/styles/StartButton.styled";
import LogoImg from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/List`; 
    navigate(path);
  }

  return (
    <>
    <Container>
      <Img/>
      <BodyHome/>
      <Logo src={LogoImg} alt="Logo"></Logo>
      <StartButton onClick={routeChange}>Start</StartButton>
      </Container>
    </>
  );
}

export default Home;
