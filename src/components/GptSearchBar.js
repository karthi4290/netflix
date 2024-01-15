
import { useSelector } from 'react-redux';
import { LANGUAGES } from './../utils/langConstants';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-gray-900 rounded-xl grid grid-cols-12">
                <input className="p-4 m-4 col-span-9 rounded-md outline-none" type="text" placeholder={LANGUAGES[langKey].searchPlaceHolder} />
                <button className="bg-red-700 col-span-3 py-2 px-4 rounded-lg text-white m-4">{LANGUAGES[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar