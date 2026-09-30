import { db } from "@/lib/auth";

export async function POST(_request, { params }) {
  const { id } = await params;

  const result = await db.collection("books").updateOne(
    {
      id: Number(id),
      available_quantity: { $gt: 0 },
    },
    {
      $inc: { available_quantity: -1 },
    }
  );

  if (result.modifiedCount === 0) {
    return Response.json(
      { message: "Book is not available" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Book borrowed successfully",
  });
}
