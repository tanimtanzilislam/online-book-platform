export default function BorrowedBooks({ borrowings }) {
  return (
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-6">
      My Borrowed Books
    </h2>

    {borrowings.length === 0 ? (
      <p>You have not borrowed any books yet.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {borrowings.map((item) => (
          <div
            key={item._id.toString()}
            className="card bg-base-100 shadow-md border"
          >
            <div className="card-body">
              <h3 className="text-xl font-bold">
                📚 {item.bookTitle}
              </h3>

              <p className="text-sm text-base-content/70 mt-2">
                Borrowed on:{" "}
                {new Date(item.borrowedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}