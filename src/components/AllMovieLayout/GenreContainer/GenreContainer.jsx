import React, { useEffect, useState } from "react";
import "./GenreContainer.css";
import { getContent } from "../../../utils/api-requests";
import SingleMovie from "../SingleMovie/SingleMovie";

const GenreContainer = ({ title, movieUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getContent(movieUrl);
      console.log(data, "DATA");
      setMovies(data?.results);
    };

    fetch();
  }, [movieUrl]);

  return (
    <div>
      <h1>{title}</h1>
      {movies?.map((movie) => (
        <SingleMovie movie={movie} />
      ))}
    </div>
  );
};

export default GenreContainer;
