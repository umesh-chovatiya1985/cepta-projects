import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const loginEvent = () => {
        sessionStorage.setItem("login", "Yes");
        navigate("/app");
    }

  return (
    <div>
        <div>Login on click</div>
        <button onClick={loginEvent}>
            Login now
        </button>
    </div>
  )
}
