import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TRAILER_URL } from '../constants';
import { addTrailer } from '../movieSlice';

const useGetTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getTrailer = async () => {
        const data = await fetch(TRAILER_URL + movieId + "/videos?language =en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(result => result.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer.key));
    }

    useEffect(() => {
        getTrailer();
    }, [])

}

export default useGetTrailerVideo