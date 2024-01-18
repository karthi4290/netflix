import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POPULARMOVIES_URL } from '../constants';
import { addPopular } from '../movieSlice';

const usePopularMovies = () => {
    const popularMovies = useSelector(store => store.movies.getPopular);
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(POPULARMOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopular(json.results));

    }
    useEffect(() => {
        if (!popularMovies){
            getPopularMovies()
        }
     
    }, [])
 
}

export default usePopularMovies