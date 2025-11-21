"use client"

import Card from "./Card"

export default function Button() {
  return (
    <>
      <Card />
      <button onClick={() => alert("This is a click")}>Click on me</button>
    </>
  )
}
