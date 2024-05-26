import Image from "next/image";
import Link from "next/link";
const Card = ({ post }) => {
  return (
    <div className=" p-2 border-2">
      <div>
        <Image
          src="https://images.pexels.com/photos/24381136/pexels-photo-24381136/free-photo-of-person-in-gray-hoodie-lying-down-with-face-in-hands-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={450}
          className="w-full "
          alt="external image"
        ></Image>
      </div>

      <h1 className="text-bold">{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/blog/${post.id}`}>Read more</Link>
    </div>
  );
};

export default Card;
