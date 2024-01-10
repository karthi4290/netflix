import Header from "./Header";
import { API_OPTIONS, URL } from './../utils/constants';
import { useEffect } from "react";



const Browse = () => {

    const getNowPlayingMovies = async () => {
        const data = await fetch(URL, API_OPTIONS);
        const json= await data.json();
        console.log(json.results);

    }

    useEffect(() => {
        console.log('useEffect from browse')
        getNowPlayingMovies();
    }, [])


    return (
        
        <div>
            <Header />
        </div>
        
    )
}

export default Browse;