"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const result: any = await signIn("credentials", {
      redirect: false,
      phoneNumber,
    })

    console.log(result)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  )
}
