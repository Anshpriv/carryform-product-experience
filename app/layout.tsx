import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CARRYFORM — Organize your cables",
  description: "Portable cable organization for work in motion.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
