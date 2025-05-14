import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import "./globals.css"

export const metadata = {
  title: "Right2ThriveUK | Wellbeing Hub",
  description: "Supporting mental health and wellbeing across the UK - Together We Thrive",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainHeader />
          <main className="min-h-screen">{children}</main>
          <MainFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
