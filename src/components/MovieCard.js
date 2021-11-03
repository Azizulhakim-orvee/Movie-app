import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({data}) => {
    return (
<Link to={`/movie/${data.imdbID}`}>
<div className="group rounded shadow-2xl border m-4 object-center hover:scale-110 transform ease-in-out transition duration-300 hover:rotate-1">
     
  
     <img src={data.Poster} alt={data.Title} />

     <p className="font-mono font-bold mt-1 text-lg group-hover:scale-110 transform text-center">{data.Title}</p>
     <p className="font-light text-center">Year: {data.Year}</p>
         
     </div>
</Link>
    );
};

export default MovieCard;