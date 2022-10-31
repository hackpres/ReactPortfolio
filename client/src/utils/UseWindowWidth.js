import { useLayoutEffect, useState } from 'react';
import Header from '../components/header/Header';

export default function UseWindowWidth() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        function updateWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    });
    return width;
}

export const getLogoMobile = () => {
    if (UseWindowWidth() < 768) {
        return <Header />
    } else {
        return;
    }
}
