import books from "@/data/books.json";

export default async function BookDetails({ params }) {

const { id } = await params;
 const book = books.find((item) => item.id === Number(id));
 if (!book) {
  return (
    <main>
      <h1>Book Not Found</h1>
    </main>
  );
}

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-[500px] object-cover rounded-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {book.title}
          </h1>

          <p className="mt-3 text-lg">
            By {book.author}
          </p>

          <p className="mt-6 text-base-content/70">
            {book.description}
          </p>

          <p className="mt-6">
            Available Quantity:{" "}
            <span className="font-bold">
              {book.available_quantity}
            </span>
          </p>

          <button className="btn btn-primary mt-6">
            Borrow
          </button>
        </div>

      </div>
    </main>
  );

}