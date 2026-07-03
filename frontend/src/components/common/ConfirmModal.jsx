import Button from "./Button";

function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-4">
          {message}
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <Button
            variant="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            loading={loading}
            onClick={onConfirm}
          >
            Delete
          </Button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;