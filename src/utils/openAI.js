import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai;