import { useSelector } from "react-redux"
import useGetTrailerVideo from "../utils/hooks/useGetTrailerVideo";
import { YOUTUBE_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector(store => store.movies.getTrailer);
  useGetTrailerVideo(movieId);
  return (
    <div>
      <iframe className="w-full aspect-video"
        src={`${YOUTUBE_URL}${trailerId}?si=${trailerId}&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}

export default VideoBackground