"use client";

import books from "@/data/books.json";
import Link from "next/link"
import { useState } from "react";
export default function BooksPage() {

   const [search, setSearch] = useState("");
   const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(search.toLowerCase())
);


     return (

  <main  className="max-w-7xl mx-auto px-4 py-10">

            <input
  type="text"
  placeholder="Search books by title..."
   value={search}
    onChange={(e) => setSearch(e.target.value)}
  className="input input-bordered w-full max-w-md mb-8"
/>
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
  </main>
);
}