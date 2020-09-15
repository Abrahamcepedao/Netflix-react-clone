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
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
