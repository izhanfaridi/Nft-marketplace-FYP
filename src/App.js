import './App.css';
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home'
import Explore from './components/Explore'
import Login from './components/Login'
import Register from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
