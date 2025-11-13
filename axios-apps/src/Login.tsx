import { useState } from "react"
import axiosInstance from "./axios-apis/AxiosInstanance"

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })

  const onChangeHandler = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }

  const loginSubmit = () => {
    axiosInstance
      .post("/login", loginForm)
      .then((data: any) => {
        if (data.status == 200) {
          const records = data?.data;
          localStorage.setItem("access", records?.access);
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        console.log("Finally called")
      })
  }

  return (
    <div>
      <input type="text" name="email" onChange={onChangeHandler} />
      <input type="password" name="password" onChange={onChangeHandler} />
      <button onClick={loginSubmit}>Login Now</button>
    </div>
  )
}
