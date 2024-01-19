
import { useSelector } from 'react-redux';
import { LANGUAGES } from './../utils/langConstants';
import useFetchGptSearchTmdbMovies from '../utils/hooks/useFetchGptSearchTmdbMovies';


const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const { gptInputref, handleSubmit } = useFetchGptSearchTmdbMovies();


    return (
        <div className="pt-[45%] md:pt-[10%] flex justify-center">
            <form className="w-4/4 md:w-1/2  bg-gray-900 rounded-xl grid grid-cols-12" onSubmit={handleSubmit}>
                <input ref={gptInputref} className="p-1  m-3 text-xs md:text-lg  md:p-4 md:m-4 col-span-8 md:col-span-9 rounded-md outline-none" type="text" placeholder={LANGUAGES[langKey].searchPlaceHolder} />
                <button type="submit" className="bg-red-700 col-span-4 md:col-span-3 py-2 px-4 rounded-lg text-white m-4">{LANGUAGES[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar