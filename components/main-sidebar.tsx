"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { Home, ClipboardCheck, BarChart2, BookOpen, Settings, Menu, X, LogOut, User } from "lucide-react"

export function MainSidebar() {
  const pathname = usePathname()
  const { isOpen, toggle, close } = useSidebar()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Questionnaires", href: "/questionnaires", icon: ClipboardCheck },
    { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggle}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Sidebar backdrop for mobile */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={close} />}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-40 h-full w-64 bg-card border-r transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:z-0
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b flex justify-center">
            <Link href="/" onClick={close} className="flex flex-col items-center">
              <img src="/images/logo.png" alt="Right2Thrive UK Logo" className="h-16 w-auto" />
              <span className="text-xs text-brand-teal mt-1 font-medium">Together We Thrive</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                        ${isActive ? "bg-brand-dark text-white" : "hover:bg-muted"}
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t">
            {isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">User Name</p>
                    <p className="text-xs text-muted-foreground truncate">user@example.com</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/login" onClick={close}>
                  <Button className="w-full">Sign In</Button>
                </Link>
                <Link href="/register" onClick={close}>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
