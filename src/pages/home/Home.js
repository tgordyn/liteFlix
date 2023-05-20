import React, { useState, useEffect } from "react";
import {
  ImageUrl,
  loadNowPlayingMovies,
  loadPopularMovies,
} from "../../utils/api";
import Header from "../../components/Header/Header";
import VerticalMenu from "../../components/VerticalMenu/VerticalMenu";
import AddMovie from "../../components/AddMovie/AddMovie";
import Dropdown from "../../components/Atoms/Dropdown/Dropdown";
import { PopularMoviesList } from "../../components/PopularMoviesList/PopularMoviesList";
import HamburgerMenucontextProvider from "../../contexts/HamburgerMenuContext";
import AddMoviesContextProvider from "../../contexts/AddMoviesContext";
import LocalStorageContextProvider from "../../contexts/LocalStorageContext";
import {
  HomeContainer,
  HomeContent,
  LeftColumnContainer,
  MoviedDetailsContainer,
  SubTitle,
  MovieTitle,
  ButtonsContainer,
  ReproduceButton,
  MyListButton,
  PlayIcon,
  Addicon,
  RigthColumnContainer,
} from "./home.styled";

const Home = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(homeMovies[0]);
  const [moviePoster, setMoviePoster] = useState("");
  const [popularMovies, setpopularMovies] = useState([]);
  const [selectedValue, setSelectedValue] = useState("POPULARES");

  // selects value from Dropdown, "populares" or "mis peliculas" and sets the state
  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  // fetch data from api and sets the state for "popular movies" and "now playing"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadPopularMovies();
        setpopularMovies(data);
      } catch (error) {
        throw new Error(error.message);
      }
      try {
        const data = await loadNowPlayingMovies();
        setHomeMovies(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  // Sets a random movie from "Now playing and sets the state for that movie to be displayed 
  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * homeMovies.length);

    setRandomMovie(homeMovies[randomIndex]);
  }, [homeMovies]);

  // Sets that movie as background image to be displayed on Home
  useEffect(() => {
    let movieUrlPoster = randomMovie && randomMovie.backdrop_path;
    setMoviePoster(`${ImageUrl}${movieUrlPoster}`);
  }, [randomMovie]);

  return (
    <LocalStorageContextProvider>
      <HamburgerMenucontextProvider>
        <AddMoviesContextProvider>
          <HomeContainer id="home" bcndimage={moviePoster}>
            <Header id="header" />
            <HomeContent>
              <VerticalMenu />
              <AddMovie />
              <LeftColumnContainer id="izquierda">
                {randomMovie && (
                  <MoviedDetailsContainer>
                    <SubTitle id="subTitle">
                      <span>ORIGINAL DE</span>
                      <span style={{ fontWeight: "700", marginLeft: "1%" }}>
                        LITEFLIX
                      </span>
                    </SubTitle>
                    <MovieTitle id="movieTitle" title={randomMovie.original_title}>{randomMovie.original_title}</MovieTitle>
                    <ButtonsContainer>
                      <ReproduceButton role="button">
                        <PlayIcon />
                        REPRODUCIR
                      </ReproduceButton>
                      <MyListButton role="button">
                        <Addicon />
                        MI LISTA
                      </MyListButton>
                    </ButtonsContainer>
                  </MoviedDetailsContainer>
                )}
              </LeftColumnContainer>
              <RigthColumnContainer id="derecha">
                <Dropdown
                  selectedValue={selectedValue}
                  onSelectChange={handleSelectChange}
                />
                <PopularMoviesList
                  movieList={popularMovies}
                  selectedValue={selectedValue}
                />
              </RigthColumnContainer>
            </HomeContent>
          </HomeContainer>
        </AddMoviesContextProvider>
      </HamburgerMenucontextProvider>
    </LocalStorageContextProvider>
  );
};

export default Home;
