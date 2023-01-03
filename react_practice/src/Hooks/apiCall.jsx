import { useState } from "react";


const movieItem = {
  padding: 12,
  margin: 12,
  border: "1px solid silver",
  backgroundColor: "#325795",
  color: "#fff",
};
const MoviesList = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState();

  const onMoviesSearch = (key, value) => {
    console.log({ key, value });
    setSearch(value);

    fetch(`https://dummyjson.com/products/search?q=laptop`)
      .then((data) => data.json())
      .then((data) => setMovies(data.products));
  };
  return (
    <>
      <div>
        <h1>My Movies</h1>
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id} style={movieItem}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MoviesList;
