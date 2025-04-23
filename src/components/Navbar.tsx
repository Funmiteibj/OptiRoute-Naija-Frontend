// src/components/Navbar.tsx
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>OptiRoute Naija</div>

            <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <Link href="/">Home</Link>
                <Link href="/search">Routes</Link>
                <Link href="/submit">Submit</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            <button className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </header>
    );
}
