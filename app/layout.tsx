import "./globals.css"
import { Inter } from "next/font/google"
import ParticleBackground from "./components/ParticleBackground"
import { Navbar } from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NumberVibes - Numerology, Astrology, and Vastu Solutions",
  description: "Discover the power of numbers with NumberVibes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 pt-16 flex-grow">{children}</main>
      </body>
    </html>
  )
}

