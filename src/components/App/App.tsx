import { useState } from 'react'
import words from "../../CatList.json"
import {Drawing} from "../../Drawing"
import {CatWord} from "../../CatWord"
import {Keyboard} from "../Keyboard/Keyboard"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "../../common/Theme";

function App() {

  const [wordToGuess, setWordToGuess] = useState(()=> {
    return words[Math.floor(Math.random()*words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)

  return (
    <>
    <Header />
      <div style ={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}
      >
        <div style = {{
          fontSize: "2rem"
        }}>
          Lose Win
        </div>
        <Drawing />
        <CatWord />
        <Keyboard />
      </div>
    </>
  )
}

export default App
