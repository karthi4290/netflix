import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_URL } from './../utils/constants';
import { addNowPlaying } from "../utils/movieSlice";

const UseNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlaying(json.results))
    }
    useEffect(() => {
        console.log('useEffect from browse')
        getNowPlayingMovies();
    }, [])
}

export default UseNowPlayingMovies;