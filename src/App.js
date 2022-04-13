import './App.css';
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home'
import Explore from './components/Explore'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
      </Routes>
    </div>
  );
}

export default App;
