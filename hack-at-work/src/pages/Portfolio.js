import Navbar from "../components/navbar/Navbar";
import { TitleShadow, TitleText } from "../components/title/titleStyles";
import CarouselSlider from '../components/carousel/CarouselSlider';
import CarouselData from "../components/carousel/carouselData";

export default function Portfolio() {
    return (
        <>
            <Navbar page='portfolio'/>
            <TitleShadow>WORK</TitleShadow>
            <TitleText>Portfolio</TitleText>
            <CarouselSlider slides={CarouselData} />
        </>
    )
}