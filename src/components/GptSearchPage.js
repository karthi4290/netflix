import React from 'react'
import GptSearchBar from './GptSearchBar';
import { LOGINBG } from './../utils/constants';
import GptMovieSuggestionBox from './GptMovieSuggestionBox';
import PopUp from './PopUp';
import { useSelector } from 'react-redux';



const GptSearchPage = () => {
  const visible = useSelector(store => store.config.visible);
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGINBG} alt="BG" />
      </div>
      {visible ? <PopUp /> :
        <>
          <GptSearchBar />
          <GptMovieSuggestionBox />
        </>
      }

    </div>
  )
}

export default GptSearchPage