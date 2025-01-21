"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-[hsl(var(--classy-dark)/_0.8)] backdrop-filter backdrop-blur-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[hsl(var(--classy-gold))]">NumberVibes</span>
          </Link>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} passHref>
                <motion.a
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    pathname === item.path
                      ? "text-[hsl(var(--classy-gold))] bg-[hsl(var(--classy-purple)/_0.2)]"
                      : "text-[hsl(var(--classy-light))] hover:text-[hsl(var(--classy-gold))] hover:bg-[hsl(var(--classy-purple)/_0.1)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

