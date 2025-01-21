"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex-grow flex items-center justify-center px-4 text-white">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--classy-gold))] to-[hsl(var(--classy-purple))]"
        >
          NumberVibes
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Discover Your Cosmic Destiny
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Unlock the secrets of the universe with our expert Numerology, Astrology, and Vastu solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--classy-gold))] to-[hsl(var(--classy-purple))] hover:from-[hsl(var(--classy-gold)/_0.8)] hover:to-[hsl(var(--classy-purple)/_0.8)] text-[hsl(var(--classy-dark))] font-bold py-3 px-6 rounded-full text-lg transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

