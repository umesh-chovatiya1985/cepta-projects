import { useEffect, useRef, useState } from "react"
import "./Login.css"

export default function Login() {
  const contactRef = useRef(null)
  const [secureType, setSecureType] = useState<string | null>(null)
  const [fields, setFields] = useState({
    contact: "",
    password: "",
  })

  const onChangeHandler = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (contactRef?.current) {
      contactRef?.current.focus()
    }
    console.log(localStorage.getItem("contact"))
  }, [])

  useEffect(() => {
    console.log(fields)
  }, [fields])

  const submitHandler = () => {
    localStorage.setItem("contact", fields?.contact)
  }

  return (
    <div>
      <h2>Welcome back!</h2>
      <div>
        <input
          ref={contactRef}
          onChange={onChangeHandler}
          type="text"
          name="contact"
          id="contact"
          placeholder="Enter Contact"
        />
      </div>
      <div>
        <input
          onChange={onChangeHandler}
          type={secureType}
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <button
          onClick={() =>
            setSecureType(secureType == "password" ? "text" : "password")
          }
        >
          {secureType == "password" ? "Show" : "Hide"}
        </button>
      </div>
      <div>
        <button onClick={submitHandler}>Login Now</button>
      </div>
    </div>
  )
}
