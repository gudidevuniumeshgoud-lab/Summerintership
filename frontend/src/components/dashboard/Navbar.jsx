import { FaBell, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-semibold">
        Student Management System
      </h2>

      <div className="flex items-center gap-5">

        <FaBell className="text-xl cursor-pointer text-gray-600" />

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-600" />

          <div>

            <p className="font-semibold">
              {user?.name || "Admin"}
            </p>

            <small className="text-gray-500">
              {user?.email || "admin@example.com"}
            </small>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;