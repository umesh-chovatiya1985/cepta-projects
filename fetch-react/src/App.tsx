import { useEffect, useState } from "react"
import List from "./components/List";

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true);
      const respo = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(respo.ok) {
        const result = await respo.json();
        setData(result)
      }
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //     .then(response => response.json())
      //     .then(json => setData(json))
    }
    catch(err) {
      console.error(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Data fetch using api</h2>
      <button onClick={fetchData}>Call api</button>
      {loading && <div>Wait, Api is calling..</div>}
      <div>
        {data.length > 0 ? <div>
          <ul>
          {data.map((record: any, index: any) => (
            <li key={index}>
              <List record={record} />
            </li>
          ))}
          </ul>
        </div> : <div>Wait, we are fetching ..</div>}
      </div>
    </>
  )
}

export default App
