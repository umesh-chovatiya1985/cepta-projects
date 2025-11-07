import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductList from './pages/sub-page/ProductList'
import ProductGrid from './pages/sub-page/ProductGrid'
import Layout from './pages/Layout'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import RedirectPage from './pages/RedirectPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/app' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='products' element={<Product />}>
            <Route path='list' element={<ProductList />} />
            <Route path='grid' element={<ProductGrid />} />
          </Route>
          <Route path='product/:id?' element={<ProductDetails />} />
        </Route>
        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
