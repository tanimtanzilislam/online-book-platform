import React from 'react'
import Link from 'next/link'
const Navbar = () => {
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

<div>
    login
</div>
        </div>
        
      </div>




    </nav>
  )
}

export default Navbar;
