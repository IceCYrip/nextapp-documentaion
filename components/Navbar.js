import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>This is a Next.js app</h1>
        <div className={styles.navbar}>
          <Link href="/home">
            <h2>Home</h2>
          </Link>
          <Link href="/image">
            <h2>Image</h2>
          </Link>
          <Link href="/routed">
            <h2>Route</h2>
          </Link>
          <Link href="/styled">
            <h2>Styled</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
