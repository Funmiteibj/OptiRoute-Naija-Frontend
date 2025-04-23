// pages/search.tsx
import { useState } from "react";
import RouteSearchForm from "@/components/RouteSearchForm";
import RouteResults, { RouteResult } from "@/components/RouteResults";

export default function SearchPage() {
    const [results, setResults] = useState<RouteResult[]>([]);

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Search a Route</h1>
            <RouteSearchForm onResults={setResults} />
            <RouteResults results={results} />
        </>
    );
}
