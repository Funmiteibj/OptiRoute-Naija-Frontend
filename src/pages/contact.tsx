import styles from "@/styles/Contact.module.css";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <div className={styles.contactContainer}>
                <h1>Contact Us</h1>
                <p>
                    We’d love to hear from you! Reach out with questions, suggestions, or
                    partnership opportunities.
                </p>

                <div className={styles.contactDetails}>
                    <div>
                        <h3>Address</h3>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>
                            <a href="tel:+2348000000000">+234 800 000 0000</a>
                        </p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>
                            <a href="mailto:support@optiroute.ng">support@optiroute.ng</a>
                        </p>
                    </div>
                </div>

                <div className={styles.mapSection}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126842.3898429065!2d3.3215092301124114!3d6.524379300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d79f7df1b27%3A0xe710a6e94ebdf7d4!2sLagos!5e0!3m2!1sen!2sng!4v1682123012789!5m2!1sen!2sng"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={styles.contactActions}>
                    <a
                        href="https://wa.me/2348000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                    >
                        Message Us on WhatsApp
                    </a>
                    <a href="tel:+2348000000000" className={styles.callBtn}>
                        Call Us
                    </a>
                </div>

                {/* Contact Form */}
                <div className={styles.contactForm}>
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
