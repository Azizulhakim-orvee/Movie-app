import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  getSelectedMovieOrShow,
  fetchAsyncMovieOrShowDetail,
  removeSelectedMovieOrShow,
  selected,
} from "../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();


  const data = useSelector(getSelectedMovieOrShow);


  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 mt-48 ml-20 font-mono">
          <p>ACTORS: {data.Actors}</p>
          <p>AWARDS: {data.Awards}</p>
          <p>COUNTRY: {data.Country}</p>
          <p>WRITER: {data.Writer}</p>
          <p>DIRECTOR: {data.Director}</p>
          <p>GENRE: {data.Genre}</p>
          <br />
          <p className="text-xl">{data.Plot}</p>
        </div>
        <div className="mr-28 mt-20">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
