import { useEffect } from "react";
import axiosInstance from "./axios-apis/AxiosInstanance";
import Login from "./Login";

function App() {

  const fetchPosts = () => {
    axiosInstance.get("/backend/records/users").then((data: any) => {
      if(data.status == 200) {
        const records = data?.data;
        console.log(records);
      }
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      console.log("Finally called")
    })
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
        <Login />
        <button onClick={fetchPosts}>Get Posts</button>
    </>
  )
}

export default App
