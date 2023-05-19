import React, { useState, useContext, useEffect } from "react";
import { ImageUrl } from "../../utils/api";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { ReactComponent as Reproducir } from "./../../svg-icons/reproducir.svg";
import { localStorageContext } from "../../contexts/LocalStorageContext";
import { updateLocalStorageData } from "../../utils/constants";
import { ReactComponent as Star } from "../../svg-icons/star.svg";
import {
  MoviesContainer,
  ColumnContainer,
  ButtonContainer,
  ButtonUp,
  ButtonDown,
  MovieCard,
  MovieDetailsContainer,
  PlayCtnr,
  PlayMovieButton,
  MovieTitle,
  MovieStars,
} from "./popularMoviesList.styled";

export const PopularMoviesList = ({ movieList, selectedValue }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const { localStorageMovieData } = useContext(localStorageContext);
  const [myMovies, setMyMovies] = useState([]);

  // Depending of selected option in Dropdown, "populares" or "mis peliculas" it will map corresponding movie array
  const visibleMovies =
    selectedValue === "POPULARES"
      ? movieList.slice(startIndex, endIndex)
      : myMovies.slice(startIndex, endIndex);

  // Logic to display only 4 movies     
  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    }
  };

  const goToNext = () => {
    if (endIndex < movieList.length) {
      setStartIndex(startIndex + 4);
      setEndIndex(endIndex + 4);
    }
  };

  // If a new movie is added to local storage globally then it will update local movie array and sort it by creation date, last one created on top
  useEffect(() => {
    const storageMovies = updateLocalStorageData().sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
    );
    setMyMovies(storageMovies);
  }, [localStorageMovieData]);

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(4);
  }, [selectedValue]);

  return (
    <MoviesContainer>
      <ButtonContainer>
        <ButtonUp onClick={goToPrevious} disabled={startIndex === 0}>
          <ArrowDropUpOutlinedIcon />
        </ButtonUp>
        <ButtonDown
          onClick={goToNext}
          disabled={
            endIndex >=
            (selectedValue === "POPULARES" ? movieList.length : myMovies.length)
          }
        >
          <ArrowDropDownOutlinedIcon />
        </ButtonDown>
      </ButtonContainer>
      <ColumnContainer>
        {visibleMovies.map((movie, key) => (
          <MovieCard
            key={key}
            bcndimage={
              selectedValue === "POPULARES"
                ? `${ImageUrl}${movie.backdrop_path}`
                : `${movie["image"]}`
            }
            index={key}
          >
            <MovieDetailsContainer id="MovieCtr">
              <PlayMovieButton id="playButton">
                <Reproducir />
              </PlayMovieButton>
              <MovieTitle id="titleHover">
                {selectedValue === "POPULARES"
                  ? movie.original_title
                  : movie["name"]}
              </MovieTitle>
            </MovieDetailsContainer>
            {selectedValue === "POPULARES" && (
              <PlayCtnr id="starsCtnr">
                <MovieStars>
                  <Star />
                  <span>{movie.vote_average}</span>
                </MovieStars>
                <span>{movie.release_date.substring(0, 4)}</span>
              </PlayCtnr>
            )}
          </MovieCard>
        ))}
      </ColumnContainer>
    </MoviesContainer>
  );
};
