import { useEffect, useRef, useState } from "react";


const useScroll = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const sliderRef = useRef(null);


    useEffect(() => {
        const sliderCurrent = sliderRef.current;
        const handleScroll = () => {
            setCanScrollLeft(sliderCurrent?.scrollLeft > 0);
            setCanScrollRight(sliderCurrent?.scrollLeft + sliderCurrent?.offsetWidth < sliderCurrent?.scrollWidth);
        };

        sliderCurrent?.addEventListener('scroll', handleScroll);

        return () => {
            sliderCurrent?.removeEventListener('scroll', handleScroll);
        }

    }, [])


    const handleDirection = (direction) => {
        const sliderCurrent = sliderRef.current;
        console.log("handle direction called")
        if (direction === 'left') {
            const scrollAmount = sliderCurrent.offsetWidth;
            sliderCurrent.scrollLeft -= scrollAmount;
        } else {
            const scrollAmount = sliderCurrent.offsetWidth;
            sliderCurrent.scrollLeft += scrollAmount;
        }
    };


    return {
        handleDirection, sliderRef, canScrollLeft, canScrollRight
    }
}

export default useScroll