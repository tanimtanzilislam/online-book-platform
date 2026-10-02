
import BorrowButton from "@/components/BorrowButton";
import Image from "next/image";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function BookDetails({ params }) {

const { id } = await params;
const res = await fetch(
  `${process.env.BETTER_AUTH_URL}/api/books`,
  { cache: "no-store" }
);

const books = await res.json();
const session = await auth.api.getSession({
  headers: await headers(),
});
if (!session) {
  redirect("/login");
}
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

        <Image
          src={book.image_url}
          alt={book.title}
          width={800}
          height={1200}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-125 object-cover rounded-lg"
          unoptimized
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

<BorrowButton
  bookId={book.id}
   bookTitle={book.title}
  disabled={book.available_quantity === 0}
/>
        </div>

      </div>
    </main>
  );

}