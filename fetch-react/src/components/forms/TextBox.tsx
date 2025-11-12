import { useState } from "react"

export default function TextBox(props: any) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <label htmlFor={props?.id ?? props?.name}>{props?.title} : </label>
      <div>
        <input
          type={isShow ? "text" : (props?.type ?? "text")}
          id={props?.id ?? props?.name}
          {...props?.register(props?.name, { required: true })}
          placeholder={props?.placeholder ?? "Enter " + props?.title}
        />
        {props?.secure && (
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      {props?.errors?.[props?.name] && (
        <>
          {props?.errors?.[props?.name]?.type == "required" && (
            <span>* required</span>
          )}
        </>
      )}
    </div>
  )
}
