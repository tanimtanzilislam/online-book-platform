"use client";

export default function BorrowButton({ bookId, bookTitle, disabled }) {
  const handleBorrow = async () => {
    // Step 1: Reduce book quantity
    const res = await fetch(`/api/books/${bookId}/borrow`, {
      method: "POST",
    });

    const contentType = res.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await res.json()
      : null;

    if (!res.ok) {
      alert(
        data?.message ?? "Unable to borrow this book. Please try again."
      );
      return;
    }

    // Step 2: Save borrowing record
    const borrowingRes = await fetch("/api/borrowings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookId,
        bookTitle,
      }),
    });

    const borrowingData = await borrowingRes.json();

    if (!borrowingRes.ok) {
      alert(
        borrowingData?.message ?? "Borrowing record could not be saved."
      );
      return;
    }

    // Step 3: Success
    alert("Book borrowed successfully");

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