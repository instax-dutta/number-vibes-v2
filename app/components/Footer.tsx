import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-4 px-4 text-center text-[hsl(var(--classy-light)/_0.8)]">
      <p>
        © NumberVibes 2025 | coded by{" "}
        <Link
          href="https://github.com/instax-dutta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--classy-gold))] hover:text-[hsl(var(--classy-purple))] transition-colors"
        >
          SDAD
        </Link>{" "}
        with <span className="inline-block animate-pulse">❤️</span>
      </p>
    </footer>
  )
}

