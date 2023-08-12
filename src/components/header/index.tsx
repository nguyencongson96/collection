import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <h1 className={styles.brand}>ONZY</h1>
      </Link>
      <ul className={styles.nav_bar}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/shop"}>
          <li>Shop</li>
        </Link>
        <Link href={"/brands"}>
          <li>Brands</li>
        </Link>
        <Link href={"/aboutus"}>
          <li>About us</li>
        </Link>
      </ul>
      <div className={styles.search_bar}>
        <input className={styles.search_input} type="text" placeholder="Search" />
        <svg className={styles.search_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
