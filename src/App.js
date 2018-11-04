import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import LazySuspense from "./components/LazySuspense";
import ErrorBoundariesCheck from "./components/ErrorBoundariesCheck";
import TodoStateHook from './components/StateHook';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/lazysuspense/" component={LazySuspense} />
          <Route path="/errorboundaries/" component={ErrorBoundariesCheck} />
          <Route path="/statehook/" component={TodoStateHook} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
