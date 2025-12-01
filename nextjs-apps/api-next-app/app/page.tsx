import { getServerSession } from "next-auth";
import GithubLogin from "./components/GithubLogin";
import UserForm from "./api/users/UserForm";

export default async function Home() {

  const session = await getServerSession();

  console.log(session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <UserForm />
    </div>
  );
}
