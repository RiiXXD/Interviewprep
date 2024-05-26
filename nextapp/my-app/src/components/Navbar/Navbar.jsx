import Link from "next/link";
import Navlink from "./Navlink";
const Navbar = () => {
  const links = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
    { link: "/blog", title: "Blog" },
  ];
  return (
    <div className="flex justify-between p-2">
      <h2>NEXT+TAILWIND</h2>
      <div className="flex justify-between">
        {links.map((l) => {
          return <Navlink key={l.link} items={l} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
