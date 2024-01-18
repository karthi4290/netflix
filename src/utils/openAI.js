import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai;