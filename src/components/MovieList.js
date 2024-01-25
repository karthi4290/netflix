import React, { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const MovieList = ({ title, movies }) => {
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


    return (
        <div className="p-6 relative ">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

            <div className="relative">

                {canScrollLeft && (
                    <MdChevronLeft
                        onClick={() => handleDirection('left')}
                        className="cursor-pointer bg-gray-300 opacity-50 hover:opacity-100 absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
                        size={40}
                    />
                )}
                <div ref={sliderRef} id="slider" className="w-full h-full  overflow-x-hidden overscroll-x-scroll scroll whitespace-nowrap scroll-smooth relative">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
                {canScrollRight && movies?.length >=10&& (
                    <MdChevronRight
                        onClick={() => handleDirection('right')}
                        className="cursor-pointer bg-gray-300 opacity-50 hover:opacity-100 absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                        size={40}
                    />
                )}
            </div>
        </div>
    );
};

export default MovieList;
