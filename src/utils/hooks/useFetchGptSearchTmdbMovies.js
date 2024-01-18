import { useDispatch } from "react-redux";
import { API_OPTIONS, GPT_TMDBMOVIES_URL } from "../constants";
import { addGptMovies } from "../gptSlice";
import { useRef } from "react";
import useConfigOpenAI from './../openAI';
import { setVisible } from "../configSlice";



const useFetchGptSearchTmdbMovies = () => {
    const gptInputref = useRef(null);
    const dispatch = useDispatch();
    const { openAI } = useConfigOpenAI();
    const openai = openAI();


    const tmdbFetchMovies = async (movie) => {
        const data = await fetch(GPT_TMDBMOVIES_URL + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results
    };


    const handleSearchGptClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + gptInputref.current.value + ". only give me names of 5 movies, comma sepreated like the example result given ahead. Example: Game of thrones, The crown, Vampire diaries, Titanic, 1899";
        try {
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',

            });
            if (!gptResults.choices) {
                throw console.error('cannot find gptResults.choices');
            }
            const movieList = gptResults.choices?.[0]?.message?.content.split(','); //split function transform your result to an array
            const modifiedMovieList = movieList.map(movie => movie.replace(/\n/g, ''));
            const promiseArray = modifiedMovieList.map(movie => tmdbFetchMovies(movie));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGptMovies({ movie: movieList, tmdb: tmdbResults }));
        } catch (error) {
            console.error('Error in handleSearchGptClick:', error);
            dispatch(setVisible(true));
        }


    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchGptClick();
    }
    return {
        handleSearchGptClick,
        gptInputref,
        handleSubmit
    };

}
export default useFetchGptSearchTmdbMovies