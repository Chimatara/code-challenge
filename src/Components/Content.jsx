import React from "react";
import { useFetchData } from "./getData";

const style = {
  height: "250px",
  width: "180px",
  objectFit: "cover",
  maxWidth: "100%",
  maxHeight: "100%",
};

// I passed props to be able to access both the movies and series since their implementation refers to same component.
const Content = ({ type, searchQuery = '', sortData = '' }) => {
  const { data, isLoading, error } = useFetchData();
  const style = { textAlign: "center", padding: "20px" };

  if (isLoading) {
    return (
      <div>
        <p style={style}>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p style={style}>Oops. Something went wrong</p>
      </div>
    );
  }

  if (!data || !data.entries) {
    return <p>No data available</p>;
  }

  //   a variable to access the program type
  const dataToFilter = data.entries
    .filter((entry) => entry.programType === type && entry.releaseYear >= 2010)
    .filter(
      (entry) =>
        searchQuery.length < 3 ||
        entry.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  // sort be asc and dsc order
  const sortEntries = dataToFilter
    .sort((a, b) => {
      switch (sortData) {
        case "year-asc":
          return a.releaseYear - b.releaseYear;
        case "year-desc":
          return b.releaseYear - a.releaseYear;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    })
    .slice(0, 21);

  return (
    <div className="content-two">
      <div className="movie-posters">
        {sortEntries.map((movie, index) => (
          <div key={index} className="image">
            <a href="#">
              <img
                className="poster-img"
                src={movie.images["Poster Art"].url}
                style={style}
                alt={`${movie.title} Poster`}
              />
            </a>

            <div className="about-movies">
              <a href="#" className="movie-title">
                {movie.title}
              </a>
              <a href="#" className="releaseYear">
                {movie.releaseYear}
              </a>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Content;
