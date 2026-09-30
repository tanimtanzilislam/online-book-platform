import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/UpdateProfileForm";
export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
  <main className="max-w-xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-6">
      Update Information
    </h1>

<UpdateProfileForm
  name={session.user.name}
  image={session.user.image}
/>
  </main>
);
}