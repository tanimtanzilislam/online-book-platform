import { db } from "@/lib/auth";

export async function GET() {
  const books = await db.collection("books").find({}).toArray();

  return Response.json(books);
}
