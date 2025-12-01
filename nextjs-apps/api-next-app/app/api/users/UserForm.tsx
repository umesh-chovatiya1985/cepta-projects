"use client"

import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

export default function UserForm() {
    // const session = useSession();

    // console.log(session.data);

    const [fields, setFields] = useState({
        mobile_no: ""
    })

    const onChangeHandler = (e: any) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async () => {
        
        // try {
        //     const respo = await fetch('/api/users/api', {
        //         method: "POST",
        //         body: JSON.stringify(fields)
        //     });
        //     if(respo.ok) {
        //         const data = await respo.json();
        //         console.log(data);
        //     }
        // }
        // catch(e: any) {
        //     console.log("Got some error during form save");
        // }
    }

    // await signIn('credentials', {
    //         contact: fields?.mobile_no,
    //         redirect: true,
    //         callbackUrl: "/api/auth/login"
    //     });

  return (
    <div>
        <form>
            <input type="number" className="border px-2 py-2 border-gray-300 rounded my-2" name="mobile_no" placeholder="Enter Mobile No." onChange={onChangeHandler} /><br />
            <button type="button" className="border bg-gray-500 rounded my-2 px-4" onClick={onSubmitHandler}>Submit</button>
        </form>
    </div>
  )
}
