import React, { useState,useEffect } from "react";
import "./app.scss";
import Movies from "../src/Movies"
 import axios from 'axios'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [movieData, setMovieData] = useState([])
  const [movieCategory, setMovieCategory] = useState([])
  const [seriesCategory, setSeriesCategory] = useState([]);

  
    const changeHandler = (e) => {
      e.preventDefault();
      setSearchValue(e.target.value);
    };
   
   useEffect(() => {
     const fetchMovies = async (searchValue) => {
       try {
         const url = `https://omdbapi.com/?i=tt3896198&apikey=e5ddefc0&s=${searchValue}&page=5`;
         const response = await axios.get(url);
         if (response.data.Search) {
           setMovieData(response.data.Search);
           setMovieCategory(
             movieData.filter((movie) => {
               return movie.Type === "movie";
             })
           );
           setSeriesCategory(
             movieData.filter((movie) => {
               return movie.Type === "series";
             })
           );
         }
       } catch (error) {
         console.log(error);
       }
     };
     fetchMovies(searchValue)
   }, [searchValue,movieData])
  return (
    <div className="app">
      <div className="row">
        <div className="col-md-12">
          <div className="navbar">
            <img src="/assets/logo.png" alt="logo" className="ps-5" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="overlay">
            <img src="/assets/hero-bg.png" alt="hero-bg" />
            <h1 className="overlay-text ms-5">
              {" "}
              Watch <br /> Something <br /> Incredible .
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group px-5 mt-4">
            <label for="search">Search</label>
            <input type="text" className="form-control mt-1" id="search"value={searchValue } onChangeCapture={changeHandler } />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Movies movieData = {movieData} movieCategory={movieCategory} seriesCategory={seriesCategory}/>
        </div>
      </div>
    </div>
  );
};

export default App;
