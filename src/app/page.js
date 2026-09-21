import Link from "next/link";
import books from "@/data/books.json";
export default function Home() {
  const featuredBooks = books.slice(0, 4);
  return (
    <main>
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">

            <p className="text-primary font-semibold mb-3">
              Welcome to BookNest
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find Your Next Read
            </h1>

            <p className="mt-5 text-base-content/70 text-lg">
              Discover amazing books, explore new ideas, and borrow
              your favorite books from our digital library.
            </p>

            <Link
              href="/books"
              className="btn btn-primary mt-6"
            >
              Browse Now
            </Link>

          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-10">
      Featured Books
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredBooks.map((book) => (
        <div key={book.id} className="card bg-base-100 shadow-md">

          <figure>
            <img
              src={book.image_url}
              alt={book.title}
              className="h-64 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title">
              {book.title}
            </h3>

            <p className="text-sm">
              By {book.author}
            </p>

            <Link
              href={`/books/${book.id}`}
              className="btn btn-primary btn-sm mt-3"
            >
              View Details
            </Link>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
    </main>
  );
}