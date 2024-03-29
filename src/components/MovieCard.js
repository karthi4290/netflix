import React from 'react'
import { POSTERPATH_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className=" w-36 md:w-[260px] p-1 inline-block cursor-pointer hover:scale-110 ease-in-out duration-300 ">
            <img className="rounded-md"
                alt="movieCard"
                src={POSTERPATH_URL + posterPath} />
        </div>
    )
}

export default MovieCard