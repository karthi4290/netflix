import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, POPULARMOVIES_URL } from '../constants';
import { addPopular } from '../movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(POPULARMOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopular(json.results));

    }
    useEffect(() => {
        getPopularMovies()
    }, [])
 
}

export default usePopularMovies