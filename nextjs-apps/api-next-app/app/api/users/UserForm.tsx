"use client"

import { useState } from "react"

export default function UserForm() {

    const [fields, setFields] = useState({
        name: "",
        email: ""
    })

    const onChangeHandler = (e: any) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async () => {
        try {
            const respo = await fetch('/api/users/api', {
                method: "POST",
                body: JSON.stringify(fields)
            });
            if(respo.ok) {
                const data = await respo.json();
                console.log(data);
            }
        }
        catch(e: any) {
            console.log("Got some error during form save");
        }
    }

  return (
    <div>
        <form>
            <input type="text" name="name" placeholder="Enter Name" onChange={onChangeHandler} /><br />
            <input type="email" name="email" placeholder="Enter Email" onChange={onChangeHandler} /><br />
            <button type="button" onClick={onSubmitHandler}>Submit</button>
        </form>
    </div>
  )
}
