import { useEffect, useRef, useState } from "react"

export default function Login() {
  const contactRef = useRef(null)
  const [secureType, setSecureType] = useState("password")
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
    <div className="max-w-sm">
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
      <div className="relative">
        <input
          className="w-full"
          onChange={onChangeHandler}
          type={secureType}
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <button
          className="absolute right-2 top-[7px] px-4 py-1"
          onClick={() =>
            setSecureType(secureType == "password" ? "text" : "password")
          }
        >
          {secureType == "password" ? "Show" : "Hide"}
        </button>
      </div>
      <div>
        <button className="px-6 py-2 rounded border-3 border-amber-900 border-dashed hover:bg-gray-900 hover:text-white" onClick={submitHandler}>Login Now</button>
      </div>
    </div>
  )
}
