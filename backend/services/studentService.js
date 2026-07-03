const Student = require("../models/Student");

// Create Student
const createStudent = async (studentData) => {
  return await Student.create(studentData);
};

// Get All Students
const getStudents = async () => {
  return await Student.find().sort({ createdAt: -1 });
};

// Get Student By ID
const getStudentById = async (id) => {
  return await Student.findById(id);
};

// Update Student
const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// Delete Student
const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};