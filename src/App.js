import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/landing-pages";


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
