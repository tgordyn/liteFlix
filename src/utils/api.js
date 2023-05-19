import axios from "axios";

export const BaseUrl = "https://api.themoviedb.org/3";
export const ImageUrl = "https://image.tmdb.org/t/p/original";
export const apiKey = "6f26fd536dd6192ec8a57e94141f8b20";

export const loadNowPlayingMovies = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}/movie/now_playing?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loadPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};
