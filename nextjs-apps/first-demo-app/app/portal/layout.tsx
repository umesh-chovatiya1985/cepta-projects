import Link from "next/link"

export default function PortalLayout({ children }: any) {
  return (
    <div>
      <div>
        <Link href={"/portal"}>Home</Link> |
        <Link href={"/portal/dashboard"}>Dashboard</Link> |
        <Link href={"/portal/products"}>Products</Link> |
        <Link href={"/portal/account"}>Account</Link>
      </div>
      <div className="container">{children}</div>
    </div>
  )
}
