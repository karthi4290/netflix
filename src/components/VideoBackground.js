import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useGetTrailer from '../hooks/useGetTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector(store => store.movies.getTrailer)

  useGetTrailer(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerId}?si=${trailerId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />

    </div>
  )
}

export default VideoBackground