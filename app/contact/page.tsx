"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Footer } from "../components/Footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[hsl(var(--classy-dark)/_0.6)] backdrop-filter backdrop-blur-lg rounded-lg p-8 w-full max-w-md border border-[hsl(var(--classy-gold)/_0.3)]"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-[hsl(var(--classy-gold))]">Contact Us</h1>
          <div className="mb-6 space-y-2">
            <div className="flex items-center text-[hsl(var(--classy-light))]">
              <Mail className="w-5 h-5 mr-2 text-[hsl(var(--classy-gold))]" />
              <a
                href="mailto:contact@numbervibes.com"
                className="hover:text-[hsl(var(--classy-gold))] transition-colors"
              >
                contact@numbervibes.com
              </a>
            </div>
            <div className="flex items-center text-[hsl(var(--classy-light))]">
              <Phone className="w-5 h-5 mr-2 text-[hsl(var(--classy-gold))]" />
              <a href="tel:+911234567890" className="hover:text-[hsl(var(--classy-gold))] transition-colors">
                +91 1234567890
              </a>
            </div>
            <div className="flex items-center text-[hsl(var(--classy-light))]">
              <MapPin className="w-5 h-5 mr-2 text-[hsl(var(--classy-gold))]" />
              <span>Rameswarpur, Dhenkanal, Odisha, 759001</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[hsl(var(--classy-light)/_0.1)] text-[hsl(var(--classy-light))] placeholder-[hsl(var(--classy-light)/_0.5)] border-[hsl(var(--classy-gold)/_0.3)] focus:border-[hsl(var(--classy-gold))] focus:ring-[hsl(var(--classy-gold)/_0.5)]"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[hsl(var(--classy-light)/_0.1)] text-[hsl(var(--classy-light))] placeholder-[hsl(var(--classy-light)/_0.5)] border-[hsl(var(--classy-gold)/_0.3)] focus:border-[hsl(var(--classy-gold))] focus:ring-[hsl(var(--classy-gold)/_0.5)]"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[hsl(var(--classy-light)/_0.1)] text-[hsl(var(--classy-light))] placeholder-[hsl(var(--classy-light)/_0.5)] border-[hsl(var(--classy-gold)/_0.3)] focus:border-[hsl(var(--classy-gold))] focus:ring-[hsl(var(--classy-gold)/_0.5)]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[hsl(var(--classy-gold))] to-[hsl(var(--classy-purple))] hover:from-[hsl(var(--classy-gold)/_0.8)] hover:to-[hsl(var(--classy-purple)/_0.8)] text-[hsl(var(--classy-dark))] font-bold py-2 px-4 rounded transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://www.instagram.com/numbervibes" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-[hsl(var(--classy-gold))] hover:text-[hsl(var(--classy-purple))] transition-colors" />
            </Link>
            <Link href="https://www.youtube.com/numbervibes" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 text-[hsl(var(--classy-gold))] hover:text-[hsl(var(--classy-purple))] transition-colors" />
            </Link>
            <Link href="https://www.twitter.com/numbervibes" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-[hsl(var(--classy-gold))] hover:text-[hsl(var(--classy-purple))] transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

