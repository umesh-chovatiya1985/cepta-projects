import { useState } from "react"
import "./App.css"
import Welcome from "./component/Welcome"
import { ContextTheme } from "./context/ThemeContext"

function App() {
  const [count, setCount] = useState("")
  const [theme, setTheme] = useState("light")

  const countEvent = () => {
    setCount("Plus")
  }

  return (
    <>
      <ContextTheme.Provider value={{ theme, setTheme }}>
        <Welcome name="react" value={20} />
        <br />
        <div>
          <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
            {" "}
            Theme Change{" "}
          </button>
          <button onClick={() => setCount("Minus")}> - </button>
          <div>Count {count}</div>
          <button onClick={countEvent}> + </button>
        </div>
      </ContextTheme.Provider>
    </>
  )
}

export default App
