import { useForm } from "react-hook-form";

import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { useEffect } from "react";

function StudentForm({
  onSubmit,
  loading = false,
  defaultValues = {},
  submitText = "Save Student",
}) {


const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
}=useForm();

useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
        reset(defaultValues);
    }
}, [reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input
          label="Student Name"
          placeholder="Enter Student Name"
          {...register("name", {
            required: "Student Name is required",
          })}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
          })}
          error={errors.email?.message}
        />

      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input
          label="Phone"
          placeholder="Enter Phone Number"
          {...register("phone", {
            required: "Phone Number is required",
          })}
          error={errors.phone?.message}
        />

        <Select
          label="Gender"
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
          {...register("gender", {
            required: "Gender is required",
          })}
          error={errors.gender?.message}
        />

      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Select
          label="Department"
          options={[
            { label: "Computer Science", value: "CSE" },
            { label: "Information Technology", value: "IT" },
            { label: "Electronics", value: "ECE" },
            { label: "Mechanical", value: "ME" },
            { label: "Civil", value: "CE" },
          ]}
          {...register("course", {
            required: "Course is required",
          })}
          error={errors.course?.message}
        />

        <Input
          label="Course"
          placeholder="Enter Department"
          {...register("department", {
            required: "Department is required",
          })}
          error={errors.department?.message}
        />

      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Select
          label="Semester"
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
          ]}
          {...register("semester", {
            required: "Semester is required",
          })}
          error={errors.semester?.message}
        />

        <Select
          label="Status"
          options={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
          ]}
          {...register("status")}
        />

      </div>

      {/* Address */}
      <Input
        label="Address"
        placeholder="Enter Address"
        {...register("address")}
      />

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          loading={loading}
          className="w-full md:w-52"
        >
          {submitText}
        </Button>
      </div>

    </form>
  );
}

export default StudentForm;