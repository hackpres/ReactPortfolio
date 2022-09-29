import { TitleShadow, TitleText } from "../components/title/titleStyles";
import Navbar from '../components/navbar/Navbar';
import CV from "../components/cv.js/CV";

export default function Resume() {
    return (
        <>
            <Navbar page='resume'/>
            <TitleShadow>RESUME</TitleShadow>
            <TitleText>Résumé </TitleText>
            <CV />
        </>
    )
}