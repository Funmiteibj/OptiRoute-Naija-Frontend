// src/pages/index.tsx
import { useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import RouteSearchForm from "@/components/RouteSearchForm";
import RouteResults, { RouteResult } from "@/components/RouteResults";

export default function Home() {
  const [results, setResults] = useState<RouteResult[]>([]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to OptiRoute Naija</h1>
          <p className={styles.heroDescription}>
            The smart way to find danfo, keke, and bus routes in Nigerian cities.
          </p>
          <button className={styles.heroButton}>Explore Routes</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/nigeriamap.png" alt="Route Map Preview" />
        </div>
      </section>

      <section className={styles.searchSection}>
        <h2 className={styles.sectionTitle}>Search for a Route</h2>
        <RouteSearchForm onResults={setResults} />
      </section>

      {results.length > 0 && (
        <section className={styles.resultsPreview}>
          <h2 className={styles.sectionTitle}>Results Preview</h2>
          <RouteResults results={results} />
        </section>
      )}

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
        <button className={styles.ctaButton}>Submit a Route</button>
      </section>
    </>
  );
}
