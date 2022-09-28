import { TitleShadow, TitleText } from "../components/title/titleStyles";
import Navbar from '../components/navbar/Navbar';

export default function Resume() {
    return (
        <>
            <Navbar page='resume'/>
            <TitleShadow>RESUME</TitleShadow>
            <TitleText>Résumé </TitleText>
        </>
    )
}