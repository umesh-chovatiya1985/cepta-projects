import React from "react"
import { useNavigate } from "react-router-dom"

export default function ProductGrid() {

  const navigate = useNavigate();

  const page = 50;

  return (
    <>
      <div>Product Grid</div>
      <button
        onClick={() => {
          navigate("/app/product/" + page )
        }}
      >
        Page change
      </button>
    </>
  )
}
