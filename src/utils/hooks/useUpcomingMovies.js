import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, UPCOMINGMOVIES_URL, } from '../constants';
import { addUpcoming } from '../movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMINGMOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcoming(json.results));

    }
    useEffect(() => {
        getUpcomingMovies()
    }, [])

}

export default useUpcomingMovies