import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai;