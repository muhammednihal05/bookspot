import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="app">
        <Routes>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
                <Header/>
                <Home/>
            </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
