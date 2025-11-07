import { Suspense, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const page = 20;
    if (!sessionStorage.getItem("login")) {
      navigate("/app/product/" + page);
      return;
    } 
    setIsLogin(true);
  }, [])

  return (
    <Suspense fallback={<div>Secure layout</div>}>
      <Outlet />
    </Suspense>
  )
}
