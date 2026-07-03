function Button({
  children,
  type = "button",
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-gray-400 ${className}`}
      {...props}
    >
      {loading ? "Please Wait..." : children}
    </button>
  );
}

export default Button;