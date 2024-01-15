import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGINBG } from './../utils/constants';


const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGINBG} alt="BG" />

      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage