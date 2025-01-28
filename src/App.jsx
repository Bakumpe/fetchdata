import React from "react";
import './App.css'
import Navigation from "./components/Navigation";
import {Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";


function App(){
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route  path="/posts" element={<Posts/>}/>
      <Route path="/posts/:id" element={<PostPage/>}/>
    </Routes>
    </>
  )
}

export default App;