import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <Link to={"/app"}>Home</Link> | 
        <Link to={"/app/about-us"}>About Us</Link> | 
        <Link to={"/app/contact-us"}>Contact Us</Link> | 
        <Link to={"/app/products"}>Products</Link>
    </div>
  )
}
