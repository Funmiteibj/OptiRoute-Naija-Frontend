import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <h1>About OptiRoute Naija</h1>
                <p className={styles.intro}>
                    OptiRoute Naija is your smart companion for navigating Nigerian cities with ease,
                    helping you discover the best danfo, keke, and bus routes through crowdsourced insights.
                </p>

                <section className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>
                        We aim to simplify urban transport by providing accurate, reliable, and
                        affordable route information, helping commuters save time and money while
                        navigating Lagos and beyond.
                    </p>
                </section>

                <section className={styles.storySection}>
                    <h2>Why We Built This</h2>
                    <p>
                        Living in a city like Lagos can be overwhelming, especially when it comes
                        to moving around affordably. OptiRoute Naija was born from our own struggles—
                        standing at bus stops confused, overpaying for routes, and wishing there was
                        a "Google Maps" for local transport.
                    </p>
                </section>

                <section className={styles.teamSection}>
                    <h2>Meet the Team</h2>
                    <p>
                        Built by a passionate team at <strong>Optivest Technologies Limited</strong>, a family-driven startup
                        dedicated to solving local problems with smart technology.
                    </p>
                    <div className={styles.teamGrid}>
                        {teamMembers.map((member) => (
                            <div className={styles.card} key={member.name}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className={styles.avatar}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

const teamMembers = [
    {
        name: "Adetayo Ibijola",
        role: "Co-Founder & CEO",
        image: "/team/funmi.png",
    },
    {
        name: "Funmilayo Ibijola",
        role: "Co-Founder & COO",
        image: "/team/funmi.png",
    },

];
