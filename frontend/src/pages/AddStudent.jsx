import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/common/Card";
import StudentForm from "../components/students/StudentForm";

import { createStudent } from "../services/studentService";

function AddStudent() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      await createStudent(formData);

      toast.success("Student Added Successfully");

      navigate("/students");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to Add Student"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <Card title="Add Student">
          <StudentForm
            onSubmit={handleSubmit}
            loading={loading}
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default AddStudent;