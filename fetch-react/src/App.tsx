import { lazy, Suspense, useEffect, useState } from "react"
import Login from "./Login"
import { useGetApi } from "./customHooks/useGetApi"
import { Button, Card } from "react-bootstrap"

const List = lazy(() => import("./components/List"));

function App() {
  const { records: data, loading, refetchData: fetchData } = useGetApi("backend/records/users")

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const respo = await fetch(`${import.meta.env?.VITE_API_URL}/posts`);
  //     if(respo.ok) {
  //       const result = await respo.json();
  //       setData(result)
  //     }
  //   }
  //   catch(err) {
  //     console.error(err)
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <h2>Data fetch using api</h2> */}
      <Login />
      <button onClick={fetchData}>Call api</button>
      {loading && <div>Wait, Api is calling..</div>}
      <div>
        {data.length > 0 ? <div>
          <ul>
          {data.map((record: any, index: any) => (
            <li key={index}>
              <Suspense fallback={<div>Loading ...</div>}>
                <List record={record} />
              </Suspense>
            </li>
          ))}
          </ul>
        </div> : <div>Wait, we are fetching ..</div>}
      </div>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>This is a card using React-Bootstrap.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <div className="grid container">
        <div className="row"> 
            <div className="col-6 sm-col-4 md-col">This 50%</div>
            <div className="col-6 sm-col-4 md-col">This 50%</div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a Bootstrap card example in React.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
