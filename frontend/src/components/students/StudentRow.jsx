import {
  FaEdit,
  FaTrash
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import StatusBadge from "../common/StatusBadge";

function StudentRow({ student, onDelete }) {

  const navigate = useNavigate();

  return (

    <tr className="hover:bg-slate-50 transition">

      <td className="py-4">

        <div>

          <p className="font-semibold">

            {student.name}

          </p>

          <small className="text-gray-500">

            {student.email}

          </small>

        </div>

      </td>

      <td>

        {student.course}

      </td>

      <td>

        {student.department}

      </td>

      <td>

        Semester {student.semester}

      </td>

      <td>

        <StatusBadge

          status={student.status}

        />

      </td>

      <td>

        <div className="flex gap-3">

          <button

            onClick={() =>
              navigate(`/edit-student/${student._id}`)
            }

            className="text-blue-600 hover:text-blue-800"

          >

            <FaEdit size={18}/>

          </button>

          <button

            onClick={() => onDelete(student._id)}

            className="text-red-600 hover:text-red-800"

          >

            <FaTrash size={18}/>

          </button>

        </div>

      </td>

    </tr>

  );

}

export default StudentRow;