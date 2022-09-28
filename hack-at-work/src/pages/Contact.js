import Navbar from '../components/navbar/Navbar';
import { TitleShadow, TitleText } from "../components/title/titleStyles";

export default function Contact() {
    return (
        <>
            <Navbar page='contact'/>
            <TitleShadow>CONTACT</TitleShadow>
            <TitleText>Contact</TitleText>
        </>
    )
}