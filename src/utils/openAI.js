import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai;