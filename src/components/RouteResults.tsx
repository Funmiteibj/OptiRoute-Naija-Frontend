import styles from "@/styles/RouteResults.module.css";
import ReactMarkdown from "react-markdown";

export interface RouteResult {
    _id?: string;
    state: string;
    from: string;
    to: string;
    transportType: string;
    price?: string;
    waitTime?: string;
    submittedBy?: string;
    description?: string;
    createdAt?: string;
}

interface RouteResultsProps {
    results: RouteResult[];
}

export default function RouteResults({ results }: RouteResultsProps) {
    if (results.length === 0) {
        return (
            <div className={styles.resultsContainer}>
                <h2>No Results Found</h2>
                <p>Try changing your search parameters.</p>
            </div>
        );
    }

    return (
        <div className={styles.resultsContainer}>
            <h2>Search Results</h2>
            <ul className={styles.resultList}>
                {results.map((route, index) => (
                    <li key={route._id || index} className={styles.resultItem}>
                        <p>
                            <strong>{route.from}</strong> to <strong>{route.to}</strong> in <strong>{route.state}</strong> via{" "}
                            <em>{route.transportType}</em>
                            {route.price && ` — ₦${route.price}`}
                            {route.waitTime && ` — Wait Time: ${route.waitTime}`}
                            {route.submittedBy && (
                                <span className={styles.submittedBy}> — Submitted by: {route.submittedBy}</span>
                            )}
                        </p>

                        {route.createdAt && (
                            <div className={styles.timestamp}>
                                Submitted: {new Date(route.createdAt).toLocaleString()}
                            </div>
                        )}

                        {route.description && (
                            <div className={styles.description}>
                                <ReactMarkdown>{route.description}</ReactMarkdown>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
