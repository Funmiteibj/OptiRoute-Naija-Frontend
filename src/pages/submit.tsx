import styles from "@/styles/Submit.module.css";
import { NIGERIAN_STATES } from "../../utils/nigeriaStates";
import { useState } from "react";
import axios from "axios";

export default function SubmitPage() {
    const [formData, setFormData] = useState({
        state: "",
        from: "",
        to: "",
        transportType: "Danfo",
        price: "",
        waitTime: "",
        submittedBy: "",
        description: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        // Client-side validation
        if (isNaN(Number(formData.price))) {
            setMessage("❌ Price must be valid numbers.");
            return;
        }

        setLoading(true);

        const normalizedData = {
            ...formData,
            from: formData.from.trim().toLowerCase(),
            to: formData.to.trim().toLowerCase(),
        };

        try {
            // Check for duplicate route
            const checkRes = await axios.get(
                `https://optiroute-naija-backend.onrender.com/api/routes`,
                {
                    params: {
                        state: normalizedData.state,
                        from: normalizedData.from,
                        to: normalizedData.to,
                        transportType: normalizedData.transportType,
                    },
                }
            );

            if (checkRes.data.exists) {
                setMessage("⚠️ This route already exists in the database.");
                return;
            }

            // Submit route
            await axios.post(
                "https://optiroute-naija-backend.onrender.com/api/routes",
                normalizedData
            );

            setMessage("✅ Route submitted! Thank you for contributing.");
            setFormData({
                state: "",
                from: "",
                to: "",
                transportType: "Danfo",
                price: "",
                waitTime: "",
                submittedBy: "",
                description: "",
            });
        } catch (err: any) {
            console.error(err);
            setMessage(
                err.response?.data?.message || "❌ Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.submitContainer}>
            <h1>Submit a Route</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <select name="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Select State</option>
                    {NIGERIAN_STATES.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>

                <input
                    name="from"
                    placeholder="From"
                    value={formData.from}
                    onChange={handleChange}
                    required
                />
                <input
                    name="to"
                    placeholder="To"
                    value={formData.to}
                    onChange={handleChange}
                    required
                />
                <select
                    name="transportType"
                    value={formData.transportType}
                    onChange={handleChange}
                >
                    <option value="Danfo">Danfo</option>
                    <option value="Keke">Keke</option>
                    <option value="Bus">Bus</option>
                </select>
                <input
                    name="price"
                    placeholder="Estimated Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    name="waitTime"
                    placeholder="Estimated Wait Time"
                    value={formData.waitTime}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Describe how to navigate this route. e.g., Take a keke from Ikeja Underbridge to Oshodi, then a danfo to CMS."
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                />
                <input
                    name="submittedBy"
                    placeholder="Your Name (optional)"
                    value={formData.submittedBy}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? (
                        <div className={styles.spinner}></div>
                    ) : (
                        "Submit Route"
                    )}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
