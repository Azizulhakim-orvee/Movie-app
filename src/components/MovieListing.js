import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from './MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie) => (
        <MovieCard key={movie.imbdID} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie) => (
        <MovieCard key={movie.imbdID} data={movie} />
      ))
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );



  return (<div>
 <div>
 <h2 className='text-center text-4xl font-mono text-yellow-700'>
          Movies 
      </h2>
      <div className='flex flex-wrap p-4 justify-center'>
          {renderMovies}
      </div>
 </div>
<div>
<h2 className='text-center text-4xl font-mono mt-1 text-yellow-700'>
          Shows 
      </h2>
      <div className='flex flex-wrap p-4 justify-center'>
          {renderShows}
      </div>
</div>
  </div>);
};

export default MovieListing;
