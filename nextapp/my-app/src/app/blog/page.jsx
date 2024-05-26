import Card from "@/components/Card/card";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Could Not Fetch Data");
  }
  return res.json();
};
const Page = async () => {
  const posts = await getData();
  return (
    <div className="w-full p-5">
      <div className="grid gap-3 grid-cols-4 ">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
