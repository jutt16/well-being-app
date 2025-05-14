"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Instagram, Twitter, Menu } from "lucide-react"

export function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cultural Activities", href: "/cultural-activities" },
    { name: "Blog", href: "/blog" },
    { name: "Wellbeing Hub Login", href: "/login" },
    { name: "RIGHT 2 THRIVE UK", href: "/about" },
    { name: "Press Release", href: "/press-release" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-brand-dark shadow-md" : "bg-brand-dark/90"
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Right2Thrive UK Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-brand-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-dark text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium hover:text-brand-gold transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
