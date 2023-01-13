import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/landing-pages";
import ListArticles from "./layouts/list-article";
import DetailArticle from "./layouts/detail-article";
import Contact from "./layouts/contact";


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/list-article"} element={<ListArticles />} />
          <Route path={"/detail-article"} element={<DetailArticle />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
