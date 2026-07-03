import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "Add Student",
      path: "/add-student",
      icon: <FaPlusCircle />,
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">

      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        SMS Admin
      </div>

      <nav className="flex-1 mt-4">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 transition hover:bg-slate-700 ${
              location.pathname === item.path
                ? "bg-blue-600"
                : ""
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

      </nav>

      <button
        onClick={handleLogout}
        className="m-4 bg-red-500 hover:bg-red-600 rounded-lg p-3 flex items-center justify-center gap-2"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;