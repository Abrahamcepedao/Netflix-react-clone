import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import movieTrailer from 'movie-trailer';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function  fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) =>  console.log(error))
        }
    }

    return (
      <div className="row">
        {/* title */}
        <div className="row__title">
          <h2>{title}</h2>
          <div>
            <p>Explorar todos</p>
            <ArrowForwardIosIcon style={{ fontSize: 12 }} />
          </div>
        </div>

        <div className="row__posters">
          {movies.map(
            (movie) =>
              movie.backdrop_path && (
                <div
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                                ${baseUrl}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }
                            )`,
                    backgroundPosition: "center center",
                  }}
                  onClick={() => handleClick(movie)}
                >
                  <div className="row__posterOverlay">
                    {!isLargeRow && (
                      <h3 className="row__posterTitle">
                        {movie?.title ||
                          movie?.name ||
                          movie?.original_name ||
                          ""}
                      </h3>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        {/* Container -> posters */}
      </div>
    );
}

export default Row;
