import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, MOVIES_URL } from '../constants';
import { addNowPlaying } from '../movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getNowMovies = async () => {
        const data = await fetch(MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlaying(json.results));

    }
    useEffect(() => {
        getNowMovies()
    }, [])
 
}

export default useNowPlayingMovies