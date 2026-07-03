import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { loginAdmin } from "../services/authService";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const response = await loginAdmin(formData);

      console.log("Login Response:", response);

      // Backend response:
      // {
      //   success:true,
      //   message:"",
      //   data:{
      //      token:"",
      //      admin:{}
      //   }
      // }

      const { admin, token } = response.data;

      login(admin, token);

      toast.success(response.message);

      navigate("/dashboard", { replace: true });

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-blue-600">
            Student Management System
          </h1>

          <p className="text-gray-500 mt-2">
            Administrator Login
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
            })}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />

          <Button
            type="submit"
            loading={loading}
          >
            Login
          </Button>

        </form>

      </div>

    </div>
  );
}

export default Login;