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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {links.map((l) => {
        return <Navlink items={l} />;
      })}
    </div>
  );
};

export default Navbar;
