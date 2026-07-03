const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

const asyncHandler = require("../middleware/asyncHandler");
const AppError = require("../errors/AppError");
const ApiResponse = require("../utils/apiResponse");

// ============================
// Register Admin
// ============================
const registerAdmin = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    throw new AppError("Admin already exists", 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json(
    new ApiResponse(
      true,
      "Admin Registered Successfully",
      {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      }
    )
  );
});

// ============================
// Login Admin
// ============================
const loginAdmin = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError(
      "Email and Password are required",
      400
    );
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new AppError("Invalid Credentials", 401);
  }

  const isMatch = await bcrypt.compare(
    password,
    admin.password
  );

  if (!isMatch) {
    throw new AppError("Invalid Credentials", 401);
  }

  const token = generateToken(admin._id);

  res.status(200).json(
    new ApiResponse(
      true,
      "Login Successful",
      {
        token,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
        },
      }
    )
  );
});

module.exports = {
  registerAdmin,
  loginAdmin,
};