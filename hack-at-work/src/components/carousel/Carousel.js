import { useEffect, useState } from "react";
import CarouselHeading from "./CarouselHeading";
import './carousel.css';

export default function Carousel(props) {
    const { children, show, infiniteLoop } = props
    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const [length, setLength] = useState(children.length)

    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    const carouselStyle = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <>
            <CarouselHeading title='Dungeons_and_Devs' github='https://github.com/wtguenthner/Dungeons-Devs' />
            <div style={carouselStyle}>
                <div className="carousel-container">
                    <div className="carousel-wrapper">
                        {
                            (isRepeating || currentIndex > 0) &&
                            <button onClick={prev} className="left-arrow">
                                &lt;
                            </button>
                        }
                        <div
                            className="carousel-content-wrapper"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            <div
                                className={`carousel-content show-${show}`}
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / show)}%)`,
                                    transition: !transitionEnabled ? 'none' : undefined,
                                }}
                                onTransitionEnd={() => handleTransitionEnd()}
                            >
                                {
                                    (length > show && isRepeating) &&
                                    renderExtraPrev()
                                }
                                {children}
                                {
                                    (length > show && isRepeating) &&
                                    renderExtraNext()
                                }
                            </div>
                        </div>
                        {
                            (isRepeating || currentIndex < (length - show)) &&
                            <button onClick={next} className="right-arrow">
                                &gt;
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}