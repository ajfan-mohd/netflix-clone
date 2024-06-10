import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { API_KEY, img_url } from '../../constants/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000); // Change banner every 10 seconds

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div
      style={{ backgroundImage: `url(${currentMovie ? img_url + currentMovie.backdrop_path : ''})` }}
      className="banner"
    >
      <div className="content ms-5">
        <h1 className="title">{currentMovie ? currentMovie.title || currentMovie.name : ''}</h1>
        <div className="banner_buttons">
          <button className="button">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="button">
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </button>
        </div>
        <p className="description">{currentMovie ? currentMovie.overview : ''}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
