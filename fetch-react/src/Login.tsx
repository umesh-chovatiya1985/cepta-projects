import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const loginNow = async (data: any) => {
    try {
      const respo = await fetch(`${import.meta.env?.VITE_API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      if (respo.ok) {
        const resJson = await respo.json()
        localStorage.setItem("access", resJson?.access)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = (data: any) => {
    loginNow(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors?.email && (
            <>{errors?.email?.type == "required" && <span>* required</span>}</>
          )}
        </div>
        <div>
          <label htmlFor="body">Password : </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors?.password && (
            <>{errors?.password?.type == "required" && <span>* required</span>}</>
          )}
        </div>
        <div>
          <button>Login Now</button>
        </div>
      </form>
    </div>
  )
}
