// import { prisma } from "@/libs/db";
async function submitForm(formdata: FormData) {
  "use server";
  const name = formdata.get("name")
  const email = formdata.get("email")
  
  const query = `INSERT INTO public."User"(name, email) VALUES('${name}', '${email}')`;

  const response = await queryHelper(query);

  console.log(response);
}

// import { pool } from "@/libs/db"
import { queryHelper } from "@/libs/QueryHelper"
import Link from "next/link"

export default async function page() {
  // const users = await prisma.user.findMany();

  // await pool.connect();

  // const userQuery = await pool.query(`SELECT * FROM public."User"`);
  // const users = userQuery.rows;

  const query = `SELECT * FROM public."User"`

  const users = await queryHelper(query)

  return (
    <div>
      <form action={submitForm}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br />
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
      {users && users?.length && (
        <div>
          {users.map((user: any) => (
            <div className="px-4">
              <Link href={`/api/users/${user?.id}`} key={user?.id}>
                {user?.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
