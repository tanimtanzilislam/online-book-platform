"use client";

import React from 'react'
import Link from 'next/link'
import { authClient } from "@/lib/auth-client";
const Navbar = () => {

  const {data:session}=authClient.useSession();
  const handleLogout = async () => {
  await authClient.signOut();

  window.location.href = "/";
};
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">


<div>
    <Link href="/" className="text-2xl font-bold text-primary">
        BookNest
    </Link>
</div>


<div className="hidden md:block">
    <ul className="flex items-center gap-6">
        <li>
            <Link href="/" className="hover:text-primary transition-colors">
             Home
            </Link>
        </li>
        <li>
            <Link href="/books"  className="font-medium hover:text-primary transition-colors">
               All Books
            </Link>
        </li>
         <li>
            <Link
              href="/profile"
              className="font-medium hover:text-primary transition-colors"
            >
              My Profile
            </Link>
          </li>

    </ul>
</div>

{session?.user ? (
  <div className="flex items-center gap-2">
    <span className="font-medium">
      {session.user.name}
    </span>

    <button  onClick={handleLogout}
  className="btn btn-error btn-sm">
      Logout
    </button>
  </div>
) : (
  <Link
    href="/login"
    className="btn btn-primary hidden md:flex"
  >
    Login
  </Link>
)}
        </div>
        
      </div>




    </nav>
  )
}

export default Navbar;
