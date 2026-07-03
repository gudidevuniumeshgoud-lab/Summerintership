import StudentRow from "./StudentRow";
import EmptyState from "../common/EmptyState";

function StudentTable({
  students,
  onDelete,
  searchTerm,
}) {
  // Empty State
  if (students.length === 0) {
    return (
      <EmptyState
        title={
          searchTerm
            ? "No Matching Students"
            : "No Students Found"
        }
        subtitle={
          searchTerm
            ? "Try another search keyword."
            : "Add your first student to get started."
        }
      />
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Student
              </th>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Department
              </th>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Course
              </th>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Semester
              </th>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Status
              </th>

              <th className="text-center px-6 py-4 font-semibold text-gray-700">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <StudentRow
                key={student._id}
                student={student}
                onDelete={onDelete}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentTable;