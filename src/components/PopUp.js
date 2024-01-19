import { useDispatch } from 'react-redux';
import useConfigOpenAI from '../utils/openAI';
import { setOpenAIKey, setVisible } from '../utils/configSlice';
import { useRef } from 'react';


const PopUp = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const overlay = 'fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm flex justify-center items-center';
    const { openAI } = useConfigOpenAI();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setOpenAIKey(inputRef?.current?.value));
        dispatch(setVisible(false));
        openAI();
    }

    return (
        <div className={overlay}>

            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg w-2/4">
                <h1 className="font-semibold text-center text-xl mb-5 text-white">
                    ❄OpenAI key is expired. Enter new key, to continue access.
                </h1>
                <div className="flex flex-col">
                    <input
                        type="text"
                        ref={inputRef}
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="Please enter key"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="px-5 py-2 bg-gray-700 text-white rounded">
                        Submit
                    </button>
                    <button className=" text-gray-500 ml-5 hover:text-gray-700">
                        ❌
                    </button>
                </div>
            </form>
        </div>

    )
}

export default PopUp;