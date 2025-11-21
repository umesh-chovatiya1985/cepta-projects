import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export default function Posts({ posts }: any) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Blog Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id} className="mb-2">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
