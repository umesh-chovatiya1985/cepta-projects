import Link from "next/link"

export default function PortalLayout({ children }: any) {
  const category = "category";
  return (
    <div>
      <div>
        <Link href={"/portal"}>Home</Link> |
        <Link href={"/portal/dashboard"}>Dashboard</Link> |
        <Link href={"/portal/products"}>Products</Link> |
        <Link href={"/portal/blogs"}>Blogs</Link> |
        <Link href={"/portal/blogs/posts"}>Posts</Link> |
        <Link href={`/portal/products/${category}`}>Category</Link> |
        <Link href={"/portal/account"}>Account</Link>
      </div>
      <div className="container">{children}</div>
    </div>
  )
}
