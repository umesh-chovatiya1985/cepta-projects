import { useContext, useEffect, useState } from "react"
import type { propsData } from "../interface/welcome"
import Welcome2 from "./Welcome2"
import { ContextTheme } from "../context/ThemeContext"

export default function Welcome(props: propsData) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(props?.name)
const { theme, setTheme } = useContext(ContextTheme);
  const countEvent = () => {
    setCount(count + 1)
    setValue("Green")
  }

  useEffect(() => {
    console.log("useEffect called " + count);
  }, [count, value]);

  // useEffect(() => {
  //   console.log("useEffect called " + value);
  // }, [value]);

  return (
    <>
      <Welcome2 name={value} value={50} />      
      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        {" "}
        Theme Change{" "}
      </button>
      {value == "Green" && <div style={{ color: "green" }}>This is a green color</div>}
      <button onClick={() => {setCount(count - 1); setValue("Color")}}> - </button>
        <div>
          Count {count}
        </div>
        <button onClick={countEvent}> + </button>
    </>
  )
}
