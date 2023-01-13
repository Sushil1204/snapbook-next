import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <PostForm />
        </div>
        <div>
          <PostCard />
        </div>
      </Layout>
    </>
  );
}
