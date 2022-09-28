// import { Navigation, Pagination, Scrollbar, A11y, Parallax, EffectCards } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/parallax';
// import 'swiper/css/effect-cards';
import Navbar from "../components/navbar/Navbar";
import { TitleShadow, TitleText } from "../components/title/titleStyles";
import CarouselSlider from '../components/carousel/CarouselSlider';
import CarouselData from "../components/carousel/carouselData";
// import Carousel from '../components/carousel/Carousel';
// import DungeonsNDevs from '../assets/images/dungeonsAndDevs.PNG';
// import KYM from '../assets/images/knowYourMusic.PNG';
// import JsCodingQuiz from '../assets/images/jsCodingQuiz.PNG';
// import JFform from '../assets/images/jfRequestForm.PNG';
// import PasswordGen from '../assets/images/passwordGenerator.PNG';
// import Horiseon from '../assets/images/horiseon.PNG';

// const galleryData =[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6
// ];

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