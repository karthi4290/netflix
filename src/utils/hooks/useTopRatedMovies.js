import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TOPRATEDMOVIES_URL } from '../constants';
import { addTopRated } from '../movieSlice';

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(TOPRATEDMOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));

    }
    useEffect(() => {
        getTopRatedMovies()
    }, [])

}

export default useTopRatedMovies