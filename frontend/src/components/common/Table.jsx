function Table({
  columns,
  children,
}) {
  return (
    <table className="w-full bg-white rounded-xl overflow-hidden shadow">

      <thead className="bg-slate-900 text-white">

        <tr>

          {columns.map((column) => (
            <th
              key={column}
              className="px-5 py-4 text-left"
            >
              {column}
            </th>
          ))}

        </tr>

      </thead>

      <tbody>

        {children}

      </tbody>

    </table>
  );
}

export default Table;