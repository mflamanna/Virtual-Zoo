import homeImage from "../assets/img/homeImage.jpg";
import { HomeImage } from "./styles/HomeImage.styled";
 
export default function HomeImg (){
    return (
        <>
            <HomeImage src={homeImage} alt="Bird" />
        </>
    )
}