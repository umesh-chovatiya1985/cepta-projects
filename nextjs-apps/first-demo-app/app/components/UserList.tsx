"use client"

import { useEffect, useState } from "react"

export default function UserList() {
  const [users, setUsers] = useState([])

  const fetchApi = async () => {
    const respo = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await respo.json()
    console.log(response);
    setUsers(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
        <h1 className="text-red-500">Client Side Data</h1>
      <ul>
        {users.length > 0 &&
          users.map((user: any) => (
            <li className="font-semibold">{user.name}</li>
          ))}
      </ul>
    </div>
  )
}
