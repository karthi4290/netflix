import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieList = ({ title, movies }) => {
    const sliderRef = useRef(null);


    const handleDirection = (direction) => {
        const slider = sliderRef.current;
        const scrollAmount = slider.offsetWidth;
        if (direction === 'left') {
            slider.scrollLeft -= scrollAmount;
        } else {
            slider.scrollLeft += scrollAmount;
        }
    };


    return (
        <div className="p-6 relative">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

            <div className="relative">
                <MdChevronLeft onClick={() => handleDirection('left')} className="opacity-50 cursor-pointer hover:opacity-100 absolute top-1/2 left-0 transform -translate-y-1/2 z-10" size={40} />
                <div ref={sliderRef} id="slider" className="w-full h-full overflow-x-hidden overscroll-x-scroll scroll whitespace-nowrap scroll-smooth relative">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
                <MdChevronRight onClick={() => handleDirection('right')} className="opacity-50 cursor-pointer hover:opacity-100 absolute top-1/2 right-0 transform -translate-y-1/2 z-10" size={40} />
            </div>
        </div>
    );
};

export default MovieList;
