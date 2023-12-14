import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button"; //Returns Header function from different file

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      {/*  <Main>*/}
      {/*      <div className="container d-flex flex-column">*/}
      {/*          <h1> Visual Design and Development</h1>*/}
      {/*      </div>*/}
      {/*  </Main>*/}
        <Button color="danger">
            <span>go away</span>
        </Button>
    </div>
  );
}

export default App;
