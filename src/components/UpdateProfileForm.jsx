"use client";

export default function UpdateProfileForm({ name, image }) {
    const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const image = formData.get("image");

  const res = await fetch("/api/profile/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  alert(data.message);
};
  return (
    <form  onSubmit={handleSubmit}  className="space-y-4">
      <input
        type="text"
         name="name"
        placeholder="Name"
        defaultValue={name}
        className="input input-bordered w-full"
      />

      <input
        type="text"
          name="image"
        placeholder="Image URL"
        defaultValue={image || ""}
        className="input input-bordered w-full"
      />

      <button className="btn btn-primary">
        Update
      </button>
    </form>
  );
}