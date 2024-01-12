import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="p-36 px-12">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div>
    <button className="bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-60 rounded-lg">Play</button>
        <button className=" mx-2 bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-60 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle