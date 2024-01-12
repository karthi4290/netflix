import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { API_OPTIONS, TRAILER_URL } from '../utils/constants'

const useGetTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMainMovieTrailer = async () => {
        const data = await fetch(`${TRAILER_URL}${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer.key));
    }

    useEffect(() => {
        getMainMovieTrailer();
    }, [])
}

export default useGetTrailer