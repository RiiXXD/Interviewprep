"use client";
import Link from "next/link";
import styles from "./Navlink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ items }) => {
  const pathName = usePathname();
  console.log(items.link == pathName);

  return (
    <div>
      <Link
        className={`${styles.container} ${
          pathName == items.link && styles.active
        }`}
        href={items.link}
      >
        {items.title}
      </Link>
    </div>
  );
};

export default Navlink;
