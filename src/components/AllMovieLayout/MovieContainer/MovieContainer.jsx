import React from "react";
import "./MovieContainer.css";
import { MOVIE_CONTENT } from "../../../utils/content";
import GenreContainer from "../GenreContainer/GenreContainer";

const MovieContainer = () => {
  return (
    <div className="moviecontainer">
      {MOVIE_CONTENT?.map((content) => (
        <GenreContainer title={content.title} movieUrl={content.movie_url} />
      ))}
    </div>
  );
};

export default MovieContainer;
