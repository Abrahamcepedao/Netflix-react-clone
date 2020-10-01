import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import "./List.css";
import Navbar from './Navbar';
import axios from "./axios";
import { useDataLayerValue } from "./DataLayer";
import Row from './Row';


function List() {
    const [{ title, request }, dispatch] = useDataLayerValue();
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);
    const [movies4, setMovies4] = useState([]);
    const [movies5, setMovies5] = useState([]);

    useEffect(() => {
        async function fetchData() {
            var newRequest = await axios.get(`${request}&page=1`);
            setMovies(newRequest);
            newRequest = await axios.get(`${request}&page=2`);
            setMovies2(newRequest.data.results);
            newRequest = await axios.get(`${request}&page=3`);
            setMovies3(newRequest.data.results);
            newRequest = await axios.get(`${request}&page=4`);
            setMovies4(newRequest.data.results);
            newRequest = await axios.get(`${request}&page=5`);
            setMovies5(newRequest.data.results);
          return newRequest;
        }
        fetchData();
    }, [])
    console.log("movies", movies);
    return (
      <div className="list">
        <Navbar />
        <Banner />
        <Row title2={`${title} Page 1`} fetchUrl={`${request}&page=1`} isNotMain isLargeRow/>
        <Row title2={`${title} Page 2`} fetchUrl={`${request}&page=2`} isNotMain isLargeRow={title == "Netflix originals"}/>
        <Row title2={`${title} Page 3`} fetchUrl={`${request}&page=3`} isNotMain isLargeRow={title == "Netflix originals"}/>
        <Row title2={`${title} Page 4`} fetchUrl={`${request}&page=4`} isNotMain isLargeRow={title == "Netflix originals"}/>
        <Row title2={`${title} Page 5`} fetchUrl={`${request}&page=5`} isNotMain isLargeRow={title == "Netflix originals"}/>
      </div>
    );
}

export default List;
