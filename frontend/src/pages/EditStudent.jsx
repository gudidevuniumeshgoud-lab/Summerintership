import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/common/Card";
import Loader from "../components/common/Loader";
import StudentForm from "../components/students/StudentForm";

import {
    getStudentById,
    updateStudent
} from "../services/studentService";

function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [student,setStudent]=useState(null);

    const [loading,setLoading]=useState(true);

    const [saving,setSaving]=useState(false);

    useEffect(()=>{

        loadStudent();

    },[]);

    const loadStudent=async()=>{

        try{

            const response=await getStudentById(id);

            setStudent(response.data);

        }

        catch(error){

            toast.error("Student Not Found");

            navigate("/students");

        }

        finally{

            setLoading(false);

        }

    };

    const handleUpdate=async(formData)=>{

        try{

            setSaving(true);

            await updateStudent(id,formData);

            toast.success("Student Updated Successfully");

            navigate("/students");

        }

        catch(error){

            toast.error(

                error.response?.data?.message ||

                "Update Failed"

            );

        }

        finally{

            setSaving(false);

        }

    };

    if(loading){

        return <Loader/>;

    }

    return(

        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                <Card title="Edit Student">

                    <StudentForm

                        defaultValues={student}

                        onSubmit={handleUpdate}

                        loading={saving}

                        submitText="Update Student"

                    />

                </Card>

            </div>

        </DashboardLayout>

    );

}

export default EditStudent;