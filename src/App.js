import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import unirest from "unirest";
import "./App.css";
require("dotenv").config();

function App() {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    getPodcasts();
  }, []);

  const api_url =
    "https://listen-api.listennotes.com/api/v2/search?q=python&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30000&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0";

  const getPodcasts = async () => {
    const response = await fetch(api_url, {
      method: "GET",
      headers: { "X-ListenAPI-Key": process.env.REACT_APP_API_KEY },
    });
    const data = await response.json();

    console.log(data.results);
    setTerm(data.results);
  };

  //console.log(term);
  term.forEach((el) => console.log(el.podcast_title_original));

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
