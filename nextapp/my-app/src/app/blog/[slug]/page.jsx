// "use client";
import Image from "next/image";
const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Could Not Fetch Data");
  }
  return res.json();
};
const page = async ({ params }) => {
  const { slug } = params;
  console.log(slug, params);
  const data = await getData(slug);
  return (
    <div>
      <div className="flex justify-between w-full p-10">
        <div>
          <Image
            src="https://images.pexels.com/photos/24381136/pexels-photo-24381136/free-photo-of-person-in-gray-hoodie-lying-down-with-face-in-hands-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={300}
            height={450}
            alt="external image"
          ></Image>
        </div>
        <div className="w-2/3">
          <h1 className="text-5xl">{data.title}</h1>
          <h3>{data.body}</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
