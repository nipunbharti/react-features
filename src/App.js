import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import LazySuspense from "./LazySuspense";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/lazysuspense/" component={LazySuspense} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
