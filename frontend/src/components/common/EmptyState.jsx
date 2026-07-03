import { FaUserGraduate } from "react-icons/fa";

function EmptyState({
  title,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-12 text-center">

      <FaUserGraduate
        className="text-6xl text-gray-300 mx-auto mb-6"
      />

      <h2 className="text-2xl font-bold">

        {title}

      </h2>

      <p className="text-gray-500 mt-3">

        {subtitle}

      </p>

    </div>
  );
}

export default EmptyState;