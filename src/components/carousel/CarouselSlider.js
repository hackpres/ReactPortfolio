import React, { useState } from 'react';
import CarouselData from './carouselData';
import { ArrowRightS } from '@styled-icons/remix-line/ArrowRightS';
import { ArrowLeftS } from '@styled-icons/remix-line/ArrowLeftS';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import './carousel.css';
 
const CarouselSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <h3>{slides[current].title} <a className='github-link' href={slides[current].github}><GithubSquare className='github-logo' /></a></h3>
            <section className='carousel'>
                <ArrowLeftS className='left-arrow' onClick={prevSlide} />
                <ArrowRightS className='right-arrow' onClick={nextSlide} />
                {CarouselData.map((slide, index) => {
                    return (
                        <div 
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <a href={slide.deployed}>
                                    <img src={slide.image} alt={slide.alt} className="image" width="230" height="297"/>
                                </a>
                            )}
                        </div>
                    )
                })}
            </section>
            <p>{slides[current].description}</p>
        </>
    )
}
 
export default CarouselSlider