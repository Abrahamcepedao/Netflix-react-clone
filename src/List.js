import React from 'react';
import Banner from './Banner';
import "./List.css";
import Navbar from './Navbar';
import { useDataLayerValue } from "./DataLayer";
import { Redirect } from "react-router-dom";
import Row from './Row';


function List() {
    const [{ title, request }] = useDataLayerValue();
    return (
      <div className="list">
        {request ? (
          <>
            <Navbar />
            <Banner />
            <Row
              title2={`${title} Page 1`}
              fetchUrl={`${request}&page=1`}
              isNotMain
              isLargeRow
            />
            <Row
              title2={`${title} Page 2`}
              fetchUrl={`${request}&page=2`}
              isNotMain
              isLargeRow={title == "Netflix originals"}
            />
            <Row
              title2={`${title} Page 3`}
              fetchUrl={`${request}&page=3`}
              isNotMain
              isLargeRow={title == "Netflix originals"}
            />
            <Row
              title2={`${title} Page 4`}
              fetchUrl={`${request}&page=4`}
              isNotMain
              isLargeRow={title == "Netflix originals"}
            />
            <Row
              title2={`${title} Page 5`}
              fetchUrl={`${request}&page=5`}
              isNotMain
              isLargeRow={title == "Netflix originals"}
            />
          </>
        ) : (
          <Redirect to="/" />
        )}
        <h2
          style={{
            color: "white",
            textAlign: "center",
            paddingBottom: "50px",
          }}
        >
          Made by Abraham Cepeda
        </h2>
      </div>
    );
}

export default List;
