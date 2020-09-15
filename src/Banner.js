import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] =  useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    //1:54
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
                {movie?.overview}
            </h1>
            {/* description */}
            </div>
        </header>
    )
}

export default Banner
