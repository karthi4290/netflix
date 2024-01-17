import React from 'react'
import GptSearchBar from './GptSearchBar';
import { LOGINBG } from './../utils/constants';
import GptMovieSuggestionBox from './GptMovieSuggestionBox';



const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGINBG} alt="BG" />

      </div>
      <GptSearchBar/>
      <GptMovieSuggestionBox/>
    </div>
  )
}

export default GptSearchPage