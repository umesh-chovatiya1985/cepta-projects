import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Product() {
  return (
    <>
        <Navigation />
        <div>Product</div>
        <div>
            <Link to={"/app/products/list"}>List</Link> |
            <Link to={"/app/products/grid"}>Grid</Link>
        </div>
        <div>
            <Suspense fallback={<div>Wait, we are loading</div>}>
                <Outlet />
            </Suspense>
        </div>
    </>
  )
}
