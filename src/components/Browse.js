
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    const toggleGptSearchView = useSelector(store => store.gpt.showSearchGpt)
    return (

        <div>
            <Header />
            {toggleGptSearchView ?
                (<GptSearchPage />) :
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )}
        </div>

    )
}

export default Browse;