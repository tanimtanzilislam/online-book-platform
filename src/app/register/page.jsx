"use client"

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export const RegisterPage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
 const handleRegister = async() => {
    const {data,error}= await authClient.signUp.email({
        name,
        email,
        password,
         image: photo,
    });
    console.log(data);
    console.log(error);

    if(!error){
        router.push("/login");
    }
  };

  return (
    <main>
        <h1>Create an Account</h1>
        <label>Name</label>
        <input type="text"    value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input type="email"   value={email} placeholder="Enter your email"onChange={(e)=>setEmail(e.target.value)}  />
        <label>Photo</label>
        <input type="url"   value={photo}  placeholder="Enter your photo URL" onChange={(e)=>setPhoto(e.target.value)}/>
        <label> Password</label>
       
        <input type="password"   value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
         <button  onClick={handleRegister}>
        Register
      </button>
    </main>
  )
}

export default RegisterPage
