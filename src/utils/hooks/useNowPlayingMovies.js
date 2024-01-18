import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, MOVIESNOW_URL } from '../constants';
import { addNowPlaying } from '../movieSlice';

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();
    const getNowMovies = async () => {
        const data = await fetch(MOVIESNOW_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlaying(json.results));

    }
    useEffect(() => {
        !nowPlayingMovies && getNowMovies();
    }, [])

}

export default useNowPlayingMovies