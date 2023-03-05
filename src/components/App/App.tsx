import { useState } from 'react'
import Hangman from "../Hangman/Hangman"
import TicTacToe from "../TicTacToe/TicTacToe"
import Home from "../Home/Home"
import About from "../About/About"
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
    <Header />
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/react-games/" element={<Home/>} />
      <Route path="/react-games/Home" element={<Home/>} />
      <Route path="/react-games/Hangman" element={<Hangman/>} />
      <Route path="/react-games/TicTacToe" element={<TicTacToe/>} />
      <Route path="/react-games/About" element={<About/>} />
    </Routes>
    </>
  )
}

export default App
