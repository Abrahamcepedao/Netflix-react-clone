import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import movieTrailer from 'movie-trailer';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink, Link } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const LinkElement = (props) => {
  const { classes, element, url } = props;

  return (
    <NavLink to={process.env.PUBLIC_URL + url} className={classes}>
      {element}
    </NavLink>
  );
};

function Row({title2, fetchUrl, isLargeRow, isNotMain}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [{ request, title }, dispatch] = useDataLayerValue();

    useEffect(() => {
        async function  fetchData(){
            const newRequest = await axios.get(fetchUrl);
            setMovies(newRequest.data.results);
            return newRequest;
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
    const setRequest = () => {
      dispatch({
        type: "SET_REQUEST",
        request: fetchUrl,
      });
      dispatch({
        type: "SET_TITLE",
        title: title2
      });
      console.log("request:", request);
      console.log("fecthUrl:", fetchUrl);
      console.log("title", title)
    }

    return (
      <div className="row">
        {/* title */}
        {!isNotMain &&
          <Link to="/list" className="row__anchor" onClick={setRequest}>
            <div className="row__title">
              <h2>{title2}</h2>
                <div>
                  <p>Explorar todos</p>
                  <ArrowForwardIosIcon style={{ fontSize: 12 }} />
                </div>
            </div>
          </Link>
        }
        {isNotMain &&
          <h2>{title2}</h2>
        }
        
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
