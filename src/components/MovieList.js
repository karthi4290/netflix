import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useScroll from '../utils/hooks/useScroll';


const MovieList = ({ title, movies }) => {
    const { handleDirection, sliderRef, canScrollLeft, canScrollRight } = useScroll();
    return (
        <div className="p-6 relative ">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
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
            {canScrollRight && movies?.length >= 10 && (
                <MdChevronRight
                    onClick={() => handleDirection('right')}
                    className="cursor-pointer bg-gray-300 opacity-50 hover:opacity-100 absolute top-1/2 right-3 transform -translate-y-1/2 z-10"
                    size={40}
                />
            )}

        </div>
    );
};

export default MovieList;
