const Student = require("../models/Student");

const getDashboardStats = async () => {

    // Total Students
    const totalStudents = await Student.countDocuments();

    // Active Students
    const activeStudents = await Student.countDocuments({
        status: "Active",
    });

    // Unique Courses
    const courses = await Student.distinct("course");

    // Unique Departments
    const departments = await Student.distinct("department");

    // Recent Students
    const recentStudents = await Student.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name email course semester");

    return {

        totalStudents,

        activeStudents,

        totalCourses: courses.length,

        totalDepartments: departments.length,

        recentStudents,

    };

};

module.exports = {
    getDashboardStats,
};