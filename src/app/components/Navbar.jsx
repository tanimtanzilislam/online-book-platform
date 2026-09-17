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


<div>
    Navigation
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
