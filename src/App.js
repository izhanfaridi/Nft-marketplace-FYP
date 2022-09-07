import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Login from "./components/Login";
import Register from "./components/Register";
import NftDetails from "./components/NftDetails";
import MintNft from "./components/MintNft";
import NotListed from "./components/NotListed";
import NotListedDetails from "./components/NotListedDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/explore/:nftId" element={<NftDetails />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mint" element={<MintNft></MintNft>}></Route>
        <Route path="/notListed" element={<NotListed></NotListed>}></Route>
        <Route path="/notListed/:nftId" element={<NotListedDetails/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
