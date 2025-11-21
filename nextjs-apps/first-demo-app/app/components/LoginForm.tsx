"use client"

import { useForm } from "react-hook-form"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        {...register("email", { required: true })}
        className="border px-2 py-1 rounded mb-2"
        type="text"
        placeholder="Email"
      />
      {errors && errors?.email && <span>Email is required!</span>}
      <br />
      <input
        {...register("password", { required: true })}
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
