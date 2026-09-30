
"use client";

export default function BorrowButton({ bookId, disabled }) {
  const handleBorrow = async () => {
    const res = await fetch(`/api/books/${bookId}/borrow`, {
      method: "POST",
    });

    const contentType = res.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await res.json()
      : null;

    if (!res.ok) {
      alert(data?.message ?? "Unable to borrow this book. Please try again.");
      return;
    }

    alert(data?.message ?? "Book borrowed successfully");

    window.location.reload();
  };

  return (
    <button
      onClick={handleBorrow}
      disabled={disabled}
      className="btn btn-primary mt-6"
    >
      {disabled ? "Not Available" : "Borrow"}
    </button>
  );
}

