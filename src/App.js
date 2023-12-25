import './App.css';
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button"; //Returns Header function from different file
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import MoviesContainer from "./components/MoviesContainer";

const App = () => {
  return (
    <div className="app-wrapper">

        <Header />
        <Hero/>
        <div className="container">
            <Button color="secondary" size="large" dashed="false" disabled="false" ghost="false" icon="round">
                <div>&#x1F50D;</div>
            </Button>

            <MoviesContainer />
        </div>
    </div>
  );
}

export default App;
