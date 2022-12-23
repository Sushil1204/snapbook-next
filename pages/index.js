import Card from "../components/Card";
import Navigation from "../components/Navigation";
import PostForm from "../components/PostForm";

export default function Home() {
  return (
    <>
      <div className="flex mt-4 container mx-auto">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-6 gap-8">
          <div className="">
            <Navigation/>
          </div>
          <div className="col-span-2 ">
            <div>
              <PostForm/>
            </div>
            <div>Post</div>
          </div>
        </div>
      </div>
    </>
  );
}
