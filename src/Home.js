import React from "react";
import "./Home.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";

function Home() {
    const [{avatar}] = useDataLayerValue();
  return (
    <div className="home">
      {avatar ? (
        <>
          <Navbar />
          <Banner fetchUrl={requests.fetchNetflixOriginals} />
          <Row
            title2="Netflix originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title2="Trending now" fetchUrl={requests.fetchTrending} />
          <Row title2="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
          <Row title2="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
          <Row title2="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title2="TV Action" fetchUrl={requests.fetchActionTV} />
          <Row title2="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title2="TV Comedy" fetchUrl={requests.fetchComedyTV} />
          <Row title2="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title2="TV Romance" fetchUrl={requests.fetchRomanceTV} />
          <Row title2="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          <h2
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            Made by Abraham Cepeda
          </h2>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Home;
