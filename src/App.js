
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functional" element={<FunctionalComponent />} />
        <Route path="/class" element={<ClassComponent />} />
      </Routes>
    </div>
  );
}

export default App;
