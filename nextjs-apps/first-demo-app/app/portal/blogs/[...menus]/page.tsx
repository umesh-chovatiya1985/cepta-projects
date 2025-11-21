export default async function BlogPage({ params }: any) {

  const menus = await params;

  console.log(menus);

  return (
    <div>Blog Page</div>
  )
}
