import Link from "next/link"
import { Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MainFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Right2Thrive UK Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Providing culturally responsive mental health support, mentorship, and career guidance to empower young
              people and their families.
            </p>
            <div className="flex space-x-4">
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
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cultural-activities" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Cultural Activities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press-release" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Press Release
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Wellbeing Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/questionnaires" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Mental Health Assessments
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-gold mr-2 mt-0.5" />
                <span className="text-gray-300">London, United Kingdom</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-gold mr-2" />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-gold mr-2" />
                <a
                  href="mailto:info@right2thriveuk.com"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  info@right2thriveuk.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Right2ThriveUK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
