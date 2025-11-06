import { useMemo, useState } from "react"

export default function Momerised() {
  const [value, setValue] = useState(0)

  const result = useMemo(() => value * 1000, [value])
  

  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Update value</button>
      <div>{result}</div>
    </>
  )
}
