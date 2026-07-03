import { useEffect, useMemo, useState } from "react";
import {
  getStudents,
  deleteStudent,
} from "../services/studentService";

function useStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 10;

  // Load Students
  const loadStudents = async () => {
    try {
      setLoading(true);

      const response = await getStudents();

      setStudents(response.data);
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load students"
      );
    } finally {
      setLoading(false);
    }
  };

  // Delete Student
  const removeStudent = async (id) => {
    await deleteStudent(id);
    await loadStudents();
  };

  // Search Filter
  const filteredStudents = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return students.filter((student) => {
      return (
        student.name.toLowerCase().includes(search) ||
        student.email.toLowerCase().includes(search) ||
        student.course.toLowerCase().includes(search)
      );
    });
  }, [students, searchTerm]);

  // Reset Page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  useEffect(() => {
    loadStudents();
  }, []);

  return {
    students: paginatedStudents,

    loading,

    error,

    removeStudent,

    refresh: loadStudents,

    searchTerm,

    setSearchTerm,

    currentPage,

    setCurrentPage,

    totalPages,

    totalStudents: filteredStudents.length,
  };
}

export default useStudents;