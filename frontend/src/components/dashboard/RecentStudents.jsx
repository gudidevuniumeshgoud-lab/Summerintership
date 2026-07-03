function RecentStudents({ students }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-xl font-bold mb-5">

                Recent Students

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">Name</th>
                        <th className="text-left py-3">Email</th>
                        <th className="text-left py-3">Department</th>
                        <th className="text-left py-3">Semester</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        students.map(student=>(

                            <tr
                            key={student._id}
                            className="border-b hover:bg-gray-50"
                            >

                                <td className="py-3">

                                    {student.name}

                                </td>

                                <td>

                                    {student.email}

                                </td>

                                <td>

                                    {student.course}

                                </td>

                                <td>

                                    {student.semester}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentStudents;