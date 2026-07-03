import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";

import Loader from "../components/common/Loader";
import PageHeader from "../components/common/PageHeader";
import Pagination from "../components/common/Pagination";
import ConfirmModal from "../components/common/ConfirmModal";

import StudentTable from "../components/students/StudentTable";
import StudentTableSkeleton from "../components/students/StudentTableSkeleton";

import useStudents from "../hooks/useStudents";

function Students() {
  const navigate = useNavigate();

  const {
    students,
    loading,
    error,
    removeStudent,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    totalStudents,
  } = useStudents();

  const [selectedId, setSelectedId] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);

      await removeStudent(selectedId);

      toast.success("Student deleted successfully");

      setModalOpen(false);

      setSelectedId(null);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Failed to delete student"
      );

    } finally {

      setDeleting(false);

    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <StudentTableSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <PageHeader
        title="Students"
        buttonText="Add Student"
        onButtonClick={() => navigate("/add-student")}
        searchValue={searchTerm}
        onSearch={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      {error && (
        <div className="mb-5 rounded-lg bg-red-100 p-4 text-red-600">
          {error}
        </div>
      )}

      <StudentTable
        students={students}
        searchTerm={searchTerm}
        onDelete={handleDeleteClick}
      />

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

        <p className="text-gray-600">

          Showing

          <span className="font-semibold">

            {" "}
            {students.length}
            {" "}

          </span>

          of

          <span className="font-semibold">

            {" "}
            {totalStudents}
            {" "}

          </span>

          students

        </p>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

      </div>

      <ConfirmModal
        isOpen={modalOpen}
        title="Delete Student"
        message="Are you sure you want to delete this student? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => {
          setModalOpen(false);
          setSelectedId(null);
        }}
        loading={deleting}
      />

    </DashboardLayout>
  );
}

export default Students;