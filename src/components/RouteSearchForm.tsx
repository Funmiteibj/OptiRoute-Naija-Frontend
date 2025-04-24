import { useEffect, useState } from "react";
import styles from "@/styles/RouteSearchForm.module.css";
import { RouteResult } from "@/components/RouteResults";
import axios from "axios";

interface Props {
    onResults: (results: RouteResult[]) => void;
}

interface RouteData {
    state: string;
    // You can extend this with more fields if needed
}

export default function RouteSearchForm({ onResults }: Props) {
    const [state, setState] = useState("");
    const [availableStates, setAvailableStates] = useState<string[]>([]);
    const [fromStops, setFromStops] = useState<string[]>([]);
    const [toStops, setToStops] = useState<string[]>([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [transportType, setTransportType] = useState("");

    // Get all unique states from available routes on load
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get<RouteData[]>(
                    "https://optiroute-naija-backend.onrender.com/api/routes"
                );
                const states = Array.from(new Set(response.data.map((route) => route.state)));
                setAvailableStates(states);
            } catch (err) {
                console.error("Failed to fetch states:", err);
            }
        };

        fetchStates();
    }, []);

    // Fetch "from" and "to" stops when state changes
    useEffect(() => {
        if (!state) return;

        const fetchStops = async () => {
            try {
                const response = await axios.get(
                    `https://optiroute-naija-backend.onrender.com/api/routes/state/${state}`
                );
                setFromStops(response.data.fromStops);
                setToStops(response.data.toStops);
                setFrom(""); // Reset from/to when state changes
                setTo("");
            } catch (err) {
                console.error("Failed to fetch stops:", err);
            }
        };

        fetchStops();
    }, [state]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!state || !from || !to || !transportType) {
            console.error("Please fill in all fields before submitting.");
            return;
        }

        try {
            const response = await axios.post(
                "https://optiroute-naija-backend.onrender.com/api/routes/search",
                { state, from, to, transportType }
            );
            onResults(response.data);
        } catch (err) {
            console.error("Search failed:", err);
            onResults([]);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label>State</label>
                <select
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState(e.target.value)}
                    required
                >
                    <option value="">Select a state</option>
                    {availableStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>From</label>
                <select
                    value={from}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFrom(e.target.value)}
                    required
                    disabled={!fromStops.length}
                >
                    <option value="">Select a departure stop</option>
                    {fromStops.map((stop) => (
                        <option key={stop} value={stop}>
                            {stop}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>To</label>
                <select
                    value={to}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTo(e.target.value)}
                    required
                    disabled={!toStops.length}
                >
                    <option value="">Select a destination stop</option>
                    {toStops.map((stop) => (
                        <option key={stop} value={stop}>
                            {stop}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Transport Type</label>
                <select
                    value={transportType}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTransportType(e.target.value)}
                    required
                >
                    <option value="">Select transport</option>
                    <option value="Danfo">Danfo</option>
                    <option value="Keke">Keke</option>
                    <option value="Bus">Bus</option>
                </select>
            </div>

            <button type="submit" className={styles.button}>
                Search Route
            </button>
        </form>
    );
}
