import OpenAI from 'openai';
import { useSelector } from 'react-redux';

const useConfigOpenAI = () => {

    const openAIKey = useSelector(store => store.config.openAIKey)

    const openAI = () => {
        const openai = new OpenAI({
            apiKey: openAIKey,
            dangerouslyAllowBrowser: true
        });
        return openai;
    }


    return { openAI }
}


export default useConfigOpenAI;