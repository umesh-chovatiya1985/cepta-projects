import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import Alert from "../components/Alert"

export default function Home() {
  const [isAlert, setIsAlert] = useState(false)

  useEffect(() => {
    console.log("isAlert has changed " + isAlert);
    // Componnt will unmount.
    return () => {

    }
  }, [isAlert]);

  return (
    <>
      <Navigation />
      <div>Home</div>
      <button onClick={() => setIsAlert(!isAlert)}>Click to go products</button>
      {isAlert ? (
        <Alert type="fail">
          <div>This is example to pass a children in component</div>
        </Alert>
      ) : (
        <div>No Alert</div>
      )}
    </>
  )
}
