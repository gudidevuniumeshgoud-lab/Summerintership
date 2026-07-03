function Input({
  label,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">

      <label className="font-semibold text-gray-700">
        {label}
      </label>

      <input
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;