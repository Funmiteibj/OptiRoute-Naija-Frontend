// src/pages/index.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to OptiRoute Naija</h1>
          <p className={styles.heroDescription}>
            The smart way to find danfo, keke, and bus routes in Nigerian cities.
          </p>
          <Link href="/search">
            <button className={styles.heroButton}>Explore Routes</button>
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image src="/nigeriamap.png" alt="Illustration of Nigeria with transport routes" />
        </div>
      </section>


      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why OptiRoute Naija?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Accurate Routes</h3>
            <p>Access verified danfo, bus, and keke routes curated by real users.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Smart Navigation</h3>
            <p>Estimate wait times, prices, and directions instantly.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Community Driven</h3>
            <p>Submit your route and contribute to a smarter Nigeria.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Be Part of the Movement</h2>
        <p>Help millions navigate smarter. Join the OptiRoute Naija community today.</p>
        <Link href="/submit">
          <button className={styles.ctaButton}>Submit a Route</button>
        </Link>
      </section>
    </>
  );
}
