import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import MovieListing from './MovieListing'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    dispatch(fetchAsyncMovies()); 
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
      <div className="bg-gray-200">
          <MovieListing />
      </div>
  );
};

export default Home;
