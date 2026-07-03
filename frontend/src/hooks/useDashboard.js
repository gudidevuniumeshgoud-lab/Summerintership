import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";

function useDashboard() {

    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            setLoading(true);

            const response = await getDashboardStats();

            setStats(response.data);

        } catch (err) {

            setError(err.response?.data?.message || "Something went wrong");

        } finally {

            setLoading(false);

        }

    };

    return {
        stats,
        loading,
        error,
        refresh: loadDashboard,
    };

}

export default useDashboard;