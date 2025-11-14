import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
        This is a first page.
        <Link href={"/about-us/about"}>About us</Link>
    </div>
  );
}
