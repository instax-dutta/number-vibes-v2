"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "./components/Footer"

const services = [
  {
    title: "Numerology",
    description: "Unlock the secrets of your life path number and discover your true potential.",
    icon: "🔢",
  },
  {
    title: "Astrology",
    description: "Gain insights into your future and understand the cosmic influences on your life.",
    icon: "🌟",
  },
  {
    title: "Vastu",
    description: "Harmonize your living spaces and create a balanced environment for success and prosperity.",
    icon: "🏠",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--classy-gold))] to-[hsl(var(--classy-purple))]"
      >
        NumberVibes
      </motion.h1>
    </header>
  )
}

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-4">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Discover Your Cosmic Destiny
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl"
      >
        Unlock the secrets of numerology and harness the power of Vastu to transform your life and space into a harmonious sanctuary. Let the cosmic energies guide your journey.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--classy-gold))] to-[hsl(var(--classy-purple))] hover:from-[hsl(var(--classy-gold)/_0.8)] hover:to-[hsl(var(--classy-purple)/_0.8)] text-[hsl(var(--classy-dark))] font-bold py-3 px-6 rounded-full text-lg transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

function Services() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ title, description, icon, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-[hsl(var(--classy-dark)/_0.6)] backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center hover:bg-[hsl(var(--classy-dark)/_0.8)] transition-all duration-300 border border-[hsl(var(--classy-gold)/_0.3)]"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--classy-gold))]">{title}</h3>
      <p className="mb-4 text-[hsl(var(--classy-light)/_0.8)]">{description}</p>
      <Link href="/contact">
        <Button
          variant="outline"
          className="mt-auto border-[hsl(var(--classy-gold))] text-[hsl(var(--classy-gold))] hover:bg-[hsl(var(--classy-gold)/_0.1)]"
        >
          Book Now
        </Button>
      </Link>
    </motion.div>
  )
}

