import React from "react";
import "./SingleMovie.css";
import { IMAGE_BASE_URL } from "../../../utils/api-requests";

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${movie?.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default SingleMovie;
