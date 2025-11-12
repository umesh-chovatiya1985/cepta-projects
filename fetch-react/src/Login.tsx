import { useEffect } from "react"
import { useForm } from "react-hook-form"
import TextBox from "./components/forms/TextBox"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const savePost = async (data: any) => {
    try {
      const respo = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      if (respo.ok) {
        const resJson = await respo.json()
        console.log(resJson)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = (data: any) => {
    savePost(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextBox type="password" secure title="User Id" name="userId" register={register} errors={errors} />
        {/* <div>
          <label htmlFor="userId">User Id : </label>
          <input
            type="text"
            id="userId"
            {...register("userId", { required: true, pattern: /^[0-9]+$/ })}
            placeholder="User Id"
          />
          {errors?.userId && (
            <>
              {errors?.username?.type == "required" && <span>* required</span>}
            </>
          )}
        </div> */}
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            placeholder="Post Title"
          />
          {errors?.title && (
            <>{errors?.title?.type == "required" && <span>* required</span>}</>
          )}
        </div>
        <div>
          <label htmlFor="body">Body : </label>
          <input
            type="text"
            id="body"
            {...register("body", { required: true })}
            placeholder="body"
          />
          {errors?.body && (
            <>{errors?.body?.type == "required" && <span>* required</span>}</>
          )}
        </div>
        <div>
          <button>Save Now</button>
        </div>
      </form>
    </div>
  )
}
