import { useReducer } from "react"

function reducer(state: any, action: any) {
  switch (action.type) {
    case "inc":
      return state
    case "dec":
      return state?.value - 1
    default:
      return state
  }
}

export default function Calculate() {

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <span>{count?.value}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  )
}
