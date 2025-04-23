import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} OptiRoute Naija. All rights reserved.</p>
    </footer>
  );
}
