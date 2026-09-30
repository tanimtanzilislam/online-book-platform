import { auth } from "@/lib/auth";
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

  const { name, image } = await request.json();

  await auth.api.updateUser({
    body: {
      name,
      image,
    },
    headers: await headers(),
  });

  return Response.json({
    message: "Profile updated successfully",
  });
}