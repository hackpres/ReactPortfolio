import { TitleShadow, TitleText } from "../components/title/titleStyles";
import Navbar from "../components/navbar/Navbar";

export default function About() {
    return (
        <>
            <Navbar page='about'/>
            <TitleShadow>ABOUT</TitleShadow>
            <TitleText>About</TitleText>
        </>
    )
}