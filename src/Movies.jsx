import React from 'react'

const Movies = ({movieCategory, seriesCategory}) => {
    console.log(seriesCategory)
    return (
      <div className="movies ps-5">
        <div className="categories mt-3 ">
          <h5>Movies</h5>
          <div className="d-flex">
            {movieCategory?.map((movie) => {
                console.log(movie)
              return (
                <div className="category me-3 " key={movie.imdbID}>
                  <img src={movie.Poster} alt="" />
                  <h5 className='text'>{movie.Title}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="categories mt-3">
          <h5> Series</h5>
          <div className='d-flex'>
            {seriesCategory?.map((movie) => {
              return (
                <div className="category me-3" key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h5 className="text">{movie.Title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ); 
}

export default Movies