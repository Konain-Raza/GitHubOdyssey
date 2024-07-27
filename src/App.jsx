import { useState } from 'react'
import './App.css'
import Searchbar from "./Components/Searchbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Searchbar />

    </>
  )
}

export default App
