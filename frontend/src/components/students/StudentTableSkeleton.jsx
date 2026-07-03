import Skeleton from "../common/Skeleton";

function StudentTableSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {/* Table Header */}

      <div className="grid grid-cols-5 gap-4 p-4 border-b">

        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            className="h-5"
          />
        ))}

      </div>

      {/* Table Rows */}

      {[...Array(8)].map((_, row) => (

        <div
          key={row}
          className="grid grid-cols-5 gap-4 p-4 border-b"
        >

          {[...Array(5)].map((_, col) => (

            <Skeleton
              key={col}
              className="h-4"
            />

          ))}

        </div>

      ))}

    </div>
  );
}

export default StudentTableSkeleton;