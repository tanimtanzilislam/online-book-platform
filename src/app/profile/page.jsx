import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
if (!session) {
  redirect("/login");
}
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
  </main>
);
}