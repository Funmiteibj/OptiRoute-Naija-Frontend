// src/components/Navbar.tsx
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>OptiRoute Naija</div>

            <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <Link href="/" onClick={closeMenu}>Home</Link>
                <Link href="/search" onClick={closeMenu}>Routes</Link>
                <Link href="/submit" onClick={closeMenu}>Submit</Link>
                <Link href="/about" onClick={closeMenu}>About</Link>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </nav>

            <button className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </header>
    );
}
