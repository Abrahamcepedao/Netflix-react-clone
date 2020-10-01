import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css'
import { useDataLayerValue } from './DataLayer';

function Banner({fetchUrl}) {
    const [movie, setMovie] =  useState([]);
    const [{request}] = useDataLayerValue();

    useEffect(() => {
        async function fetchData() {
            
          const newRequest = await axios.get(fetchUrl ? requests.fetchNetflixOriginals : request);
          setMovie(
            newRequest.data.results[
              Math.floor(Math.random() * newRequest.data.results.length - 1)
            ]
          );
          return newRequest;
        }
        
        fetchData();
    }, []);
    console.log("banner movie", movie);
    function  truncate(str, n) {
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }
    
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            {/* backgorund image */}
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                {/* title */}
                {/* div `2 butttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
                {/* description */}
            </div>
        </header>
    )
}

export default Banner
