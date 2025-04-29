import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.contentWrapper}>{children}</div>
            </main>
            <Footer />
        </div>
    );
}
