"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [bookState, setBookState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBookState(data))
      .catch((error) => {
        console.log(error);
  setLoading(false);
      });
  }, []);

  const filteredBooks = bookState.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || book.category === category)
  );
if (loading) {
  return <p className="text-center py-20">Loading books...</p>;
}

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Category Sidebar */}
        <aside>
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-3">
              Categories
            </h2>

            <div className="flex md:flex-col gap-3">
              <button
                onClick={() => setCategory("All")}
                className="btn btn-primary btn-sm"
              >
                All
              </button>

              <button
                onClick={() => setCategory("Story")}
                className="btn btn-outline btn-sm"
              >
                Story
              </button>

              <button
                onClick={() => setCategory("Tech")}
                className="btn btn-outline btn-sm"
              >
                Tech
              </button>

              <button
                onClick={() => setCategory("Science")}
                className="btn btn-outline btn-sm"
              >
                Science
              </button>
            </div>
          </div>
        </aside>

        {/* Books Section */}
        <section className="md:col-span-3">
          <input
            type="text"
            placeholder="Search books by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full max-w-md mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="card bg-base-100 shadow-md"
              >
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />

                <div className="card-body">
                  <h2 className="card-title">
                    {book.title}
                  </h2>

                  <p>By {book.author}</p>

                  <Link
                    href={`/books/${book.id}`}
                    className="btn btn-primary mt-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}