import { FaSearch } from "react-icons/fa";

function SearchBar({
  value,
  onChange,
}) {

  return (

    <div className="relative w-full md:w-96">

      <FaSearch
        className="absolute left-4 top-4 text-gray-400"
      />

      <input

        type="text"

        value={value}

        onChange={onChange}

        placeholder="Search students..."

        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"

      />

    </div>

  );

}

export default SearchBar;