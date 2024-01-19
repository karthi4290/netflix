
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackGround';
import { useSelector } from 'react-redux';


const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if (!movies) return
    // const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[0];
    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={movie.title} overview={movie.overview} />
            <VideoBackground movieId={movie.id} />
        </div>
    )
}

export default MainContainer