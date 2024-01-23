import React from 'react'
import { POSTERPATH_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className=" w-36 md:w-[220px] p-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
            <img
                alt="movieCard"
                src={POSTERPATH_URL + posterPath} />
        </div>
    )
}

export default MovieCard