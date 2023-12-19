import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import style from "./css/default.module.scss";
import Home from "./pages/home.js";
import Movies from "./pages/movies/index.js";
import Navigation from "../src/components/navigation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/movies/details.js";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navigation />

        <main className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Movies />} />
            <Route path="/filmes/:id/details" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
