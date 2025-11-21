export default function LoginFormServer() {

  return (
    <div>
      <form>
        <input
        onChange={(e: any) => console.log(e.target.value)}
        name="email"
        className="border px-2 py-1 rounded mb-2"
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        name="password"
        className="border px-2 py-1 rounded mb-4"
        type="password"
        placeholder="Password"
      />
      <br />
      <button className="border px-2 py-1 rounded">Login Now</button>
      </form>
    </div>
  )
}
