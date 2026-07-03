const { body } = require("express-validator");

const createStudentValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),

    body("email")
        .isEmail()
        .withMessage("Invalid Email"),

    body("course")
        .notEmpty()
        .withMessage("Course is required"),

    body("semester")
        .isInt({ min: 1, max: 8 })
        .withMessage("Semester must be between 1 and 8"),

];

module.exports = {
    createStudentValidator,
};