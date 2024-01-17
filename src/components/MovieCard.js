import React from 'react'
import { POSTERPATH_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className="w-48 pr-4">
            <img
                alt="movieCard"
                src={POSTERPATH_URL + posterPath} />
        </div>
    )
}

export default MovieCard