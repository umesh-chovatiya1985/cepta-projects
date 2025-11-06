import { useState } from "react"
import "./App.css"
import Welcome from "./component/Welcome"
import { ContextTheme } from "./context/ThemeContext"
import Login from "./component/Login"
import Momerised from "./component/Momerised"
import Calculate from "./component/Reducer"

function App() {
  const [count, setCount] = useState("")
  const [theme, setTheme] = useState("light")

  const countEvent = () => {
    setCount("Plus")
  }

  return (
    <>
      <ContextTheme.Provider value={{ theme, setTheme }}>
        <Login />
        <Momerised />
        <Calculate />
      </ContextTheme.Provider>
    </>
  )
}

export default App
