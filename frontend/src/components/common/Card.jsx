function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      {title && (
        <div className="mb-8 border-b pb-4">

          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>

        </div>
      )}

      {children}

    </div>
  );
}

export default Card;