import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TOPRATEDMOVIES_URL } from '../constants';
import { addTopRated } from '../movieSlice';

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector(store => store.movies.getTopRated);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(TOPRATEDMOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));

    }
    useEffect(() => {
        !topRatedMovies &&getTopRatedMovies()
    }, [])

}

export default useTopRatedMovies