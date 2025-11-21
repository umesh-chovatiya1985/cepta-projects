import LoginForm from "../components/LoginForm";
import LoginFormServer from "../components/LoginFormServer";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
     <div>
       <LoginForm />
       <LoginFormServer />
     </div>
    </div>
  )
}
