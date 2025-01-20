import "./globals.css"
import { Inter } from "next/font/google"
import ParticleBackground from "./components/ParticleBackground"

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
      <body className={inter.className}>
        <ParticleBackground />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}

