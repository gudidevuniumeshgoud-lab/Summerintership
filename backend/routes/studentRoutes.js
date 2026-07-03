const express = require("express");

const router = express.Router();
const validate = require("../middleware/validate");

const {
    createStudentValidator,
} = require("../validators/studentValidator");

const protect = require("../middleware/authMiddleware");

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.post(
    "/",
    protect,
    createStudentValidator,
    validate,
    createStudent
);

router.get("/", protect, getStudents);

router.get("/:id", protect, getStudentById);

router.put("/:id", protect, updateStudent);

router.delete("/:id", protect, deleteStudent);

module.exports = router;