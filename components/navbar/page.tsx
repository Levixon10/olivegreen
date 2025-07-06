"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.brand}>Born to an Olive Green</div>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <Link href="/" className={styles.text} onClick={() => setIsOpen(false)}>HOME</Link>
        <Link href="/about" className={styles.text} onClick={() => setIsOpen(false)}>ABOUT</Link>
        <Link href="/articles" className={styles.text} onClick={() => setIsOpen(false)}>ARTICLES</Link>
        <Link href="/contact" className={styles.text} onClick={() => setIsOpen(false)}>CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
