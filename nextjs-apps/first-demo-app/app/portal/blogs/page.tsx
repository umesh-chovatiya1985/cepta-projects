import UserList from "@/app/components/UserList";

export default async function Blogs() {
    const respo = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!respo.ok) {
        return <div>Found issue during api call.</div>
    }
    const response = await respo.json();

  return (
    <div>
        <h2>Users</h2>
        <div>
            <ul>
            {response && response.map((user: any) => (
                <li className="font-semibold">{ user.name }</li>
            ))}
            </ul>
        </div>
        <UserList />
    </div>
  )
}
