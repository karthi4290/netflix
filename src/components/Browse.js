import UseNowPlayingMovies from "../hooks/useGetNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    UseNowPlayingMovies();
    return (

        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
            {/* 
               MainContainer
                - Video running in the background (video component)
                - Video title (video title component)
                 - Buttons(Play & More Info)
               SecondaryContainer
                - MovieList * n
                  - cards * n
            */}
        </div>

    )
}

export default Browse;