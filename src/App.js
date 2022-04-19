import './App.css';
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home'
import Explore from './components/Explore'
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
