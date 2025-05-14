import type React from "react"
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import { MainSidebar } from "@/components/main-sidebar"

export default function WellbeingHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainHeader />
      <div className="flex min-h-screen">
        <MainSidebar />
        <main className="flex-1">{children}</main>
      </div>
      <MainFooter />
    </>
  )
}
