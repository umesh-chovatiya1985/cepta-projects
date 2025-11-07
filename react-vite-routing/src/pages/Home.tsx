import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Alert from '../components/Alert'

export default function Home() {

    const navigate = useNavigate()

  return (
    <>
        <Navigation />
        <div>Home</div>
        <button onClick={() => navigate('/products')}>Click to go products</button>
        <Alert type="fail">
          <div>This is example to pass a children in component</div>
        </Alert>
    </>
  )
}
