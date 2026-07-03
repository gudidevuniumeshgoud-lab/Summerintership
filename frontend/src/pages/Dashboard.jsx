import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import RecentStudents from "../components/dashboard/RecentStudents";
import Loader from "../components/common/Loader";
import useDashboard from "../hooks/useDashboard";
import useAuth from "../hooks/useAuth";

function Dashboard() {

    const { user } = useAuth();

    const {
        stats,
        loading,
        error,
    } = useDashboard();

    if (loading) {

        return <Loader />;

    }

    if (error) {

        return (

            <DashboardLayout>

                <h2 className="text-red-500">

                    {error}

                </h2>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    Welcome Back, {user?.name} 👋

                </h1>

                <p className="text-gray-500">

                    Here's today's overview.

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <DashboardCard

                    title="Total Students"

                    value={stats.totalStudents}

                    color="text-blue-600"

                />

                <DashboardCard

                    title="Active Students"

                    value={stats.activeStudents}

                    color="text-green-600"

                />

                <DashboardCard

                    title="Departments"

                    value={stats.totalCourses}

                    color="text-purple-600"

                />

                <DashboardCard

                    title="Courses"

                    value={stats.totalDepartments}

                    color="text-red-600"

                />

            </div>

            <RecentStudents

                students={stats.recentStudents}

            />

        </DashboardLayout>

    );

}

export default Dashboard;