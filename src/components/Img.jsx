import homeImage from "../assets/img/homeImage.jpg";
import { Image } from "./styles/Image.styled";
 
export default function Img (){
    return (
        <>
            <Image src={homeImage} alt="Bird" />
        </>
    )
}