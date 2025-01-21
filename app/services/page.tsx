"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Numerology",
    description: "Unlock the secrets of your life path number and discover your true potential.",
    icon: "🔢",
    subServices: [
      "Life Path Number Analysis",
      "Name Numerology",
      "Birth Date Numerology",
      "Numerology Compatibility",
      "Personal Year Forecast",
    ],
  },
  {
    title: "Astrology",
    description: "Gain insights into your future and understand the cosmic influences on your life.",
    icon: "🌟",
    subServices: [
      "Birth Chart Reading",
      "Zodiac Compatibility",
      "Transit Analysis",
      "Career Astrology",
      "Relationship Astrology",
    ],
  },
  {
    title: "Vastu",
    description: "Harmonize your living spaces and create a balanced environment for success and prosperity.",
    icon: "🏠",
    subServices: [
      "Home Vastu Analysis",
      "Office Vastu Consultation",
      "Land Selection",
      "Vastu Remedies",
      "Feng Shui Integration",
    ],
  },
]

export default function Services() {
  return (
    <div className="py-12 px-4 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[hsl(var(--classy-gold))]"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ title, description, icon, subServices, index }) {
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
      <ul className="text-left mb-6 w-full">
        {subServices.map((subService, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span className="text-[hsl(var(--classy-gold))] mr-2">•</span>
            {subService}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="mt-auto">
        <Button
          variant="outline"
          className="border-[hsl(var(--classy-gold))] text-[hsl(var(--classy-gold))] hover:bg-[hsl(var(--classy-gold)/_0.1)]"
        >
          Order Now
        </Button>
      </Link>
    </motion.div>
  )
}

