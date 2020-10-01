import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Banner */}
      <Banner/>
      {/* Rows */}
      <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="TV Action" fetchUrl={requests.fetchActionTV} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="TV Comedy" fetchUrl={requests.fetchComedyTV} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Romance" fetchUrl={requests.fetchRomanceTV} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <h2
        style={{
          color: "white",
          textAlign: 'center',
          paddingBottom: '50px'
        }}
      >Made by Abraham Cepeda</h2>
    </div>
  );
}

export default App;
