import { useState } from 'react'
import Hangman from "../Hangman/Hangman"
import Home from "../Home/Home"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TabsRouter from "../TabsRouter/TabsRouter";
import { ThemeProvider } from "../../common/Theme";

function App() {

  return (
    <>
    {/* <Header />
    <Home/> */}
    <TabsRouter/>
    </>
  )
}

export default App
