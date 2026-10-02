import { auth } from "@/lib/auth";
import { db } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BorrowedBooks from "@/components/BorrowedBooks";
export default async function ProfilePage() {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
if (!session) {
  redirect("/login");
}
const borrowings = await db
  .collection("borrowings")
  .find({ userId: session.user.id })
  .sort({ borrowedAt: -1 })
  .toArray();
 return (
  <main className="max-w-3xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold">My Profile</h1>

    <p className="mt-6">
      Name: {session.user.name}
    </p>

    <p className="mt-2">
  Email: {session.user.email}
</p>
{session.user.image && (
  <img
    src={session.user.image}
    alt={session.user.name}
    className="w-24 h-24 rounded-full mt-6 object-cover"
  />
)}

<BorrowedBooks borrowings={borrowings} />
  </main>
);
}