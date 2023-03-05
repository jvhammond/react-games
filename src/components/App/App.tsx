import { useState } from 'react'
import Hangman from "../Hangman/Hangman"
import Home from "../Home/Home"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import TabsRouter from "../TabsRouter/TabsRouter";
import ResponsiveAppBar from "../../Navbar";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "../../common/LocalStorage";

function App() {

  return (
    <>
    {/* <Header />
    <Home/> */}
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Hangman" element={<Hangman/>} />
      <Route path="TicTacToe" element={<Home/>} />
      <Route path="About" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
