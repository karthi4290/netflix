import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestionBox = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
  if(!movieNames && !movieResults) return null;
  return (
    <div className="bg-gray-900 p-4 m-4 text-white rounded-2xl">
      <div>
        {movieNames.map((movieName, index) => (<MovieList key={movieName} title={movieName} movies={movieResults[index]} />))}
      </div>
    </div>
  )
}

export default GptMovieSuggestionBox;