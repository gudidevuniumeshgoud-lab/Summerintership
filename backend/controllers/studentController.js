const studentService = require("../services/studentService");
const asyncHandler = require("../middleware/asyncHandler");
const AppError = require("../errors/AppError");
const ApiResponse = require("../utils/apiResponse");

// ============================
// Create Student
// ============================
const createStudent = asyncHandler(async (req, res) => {
  const student = await studentService.createStudent(req.body);

  res.status(201).json(
    new ApiResponse(
      true,
      "Student Created Successfully",
      student
    )
  );
});

// ============================
// Get All Students
// ============================
const getStudents = asyncHandler(async (req, res) => {
  const students = await studentService.getStudents();

  res.status(200).json(
    new ApiResponse(
      true,
      "Students Retrieved Successfully",
      students
    )
  );
});

// ============================
// Get Student By ID
// ============================
const getStudentById = asyncHandler(async (req, res) => {
  const student = await studentService.getStudentById(req.params.id);

  if (!student) {
    throw new AppError("Student Not Found", 404);
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Student Retrieved Successfully",
      student
    )
  );
});

// ============================
// Update Student
// ============================
const updateStudent = asyncHandler(async (req, res) => {
  const student = await studentService.updateStudent(
    req.params.id,
    req.body
  );

  if (!student) {
    throw new AppError("Student Not Found", 404);
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Student Updated Successfully",
      student
    )
  );
});

// ============================
// Delete Student
// ============================
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await studentService.deleteStudent(req.params.id);

  if (!student) {
    throw new AppError("Student Not Found", 404);
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Student Deleted Successfully",
      null
    )
  );
});

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};