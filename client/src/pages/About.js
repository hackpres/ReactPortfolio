import { TitleShadow, TitleText } from "../components/title/titleStyles";
import Navbar from "../components/navbar/Navbar";
import Bio from '../components/bio/Bio';
import bioData from "../components/bio/bioData";

export default function About() {
    return (
        <>
            <Navbar page='about' />
            <TitleShadow>ABOUT</TitleShadow>
            <TitleText>About</TitleText>
            <Bio bioInfo={bioData} />
        </>
    )
}