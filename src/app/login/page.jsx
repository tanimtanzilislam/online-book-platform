"use client"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const LoginPage= () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleLogin = async () => {
 const { data, error } = await authClient.signIn.email({
    email,
    password,
  });

  console.log(data);
  console.log(error);
   if (error) {
    alert(error.message);
    return;
  }
  router.push("/");
};

const handleGoogleLogin = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  console.log(data);
  console.log(error);
};
  return (
    <main>
      <h1>Login</h1>

      {/* Email */}
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
         value={email}
  onChange={(e) => setEmail(e.target.value)}
      />
       {/* Password */}
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
  onChange={(e) => setPassword(e.target.value)}
      />

       {/* Login Button */}
      <button  onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleGoogleLogin}>
  Continue with Google
</button>
    </main>
  )
}

export default LoginPage
