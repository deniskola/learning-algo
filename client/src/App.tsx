import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>home</div>}>
              <Route path="/test" element={<div>test</div>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
