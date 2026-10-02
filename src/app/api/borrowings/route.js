import { db, auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { bookId, bookTitle } = await request.json();

  await db.collection("borrowings").insertOne({
    userId: session.user.id,
    userName: session.user.name,
    bookId: Number(bookId),
    bookTitle,
    borrowedAt: new Date(),
  });

  return Response.json({
    message: "Borrowing record saved",
  });
}



export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const borrowings = await db
    .collection("borrowings")
    .aggregate([
      {
        $match: {
          userId: session.user.id,
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "bookId",
          foreignField: "id",
          as: "book",
        },
      },
      {
        $unwind: {
          path: "$book",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          borrowedAt: -1,
        },
      },
    ])
    .toArray();

  return Response.json(borrowings);
}