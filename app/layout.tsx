import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SupportAssistant from "@/components/support-assistant"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "BITZ IT Consulting",
  description: "Technology systems for public institutions and enterprises across Africa.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
        <SupportAssistant />
      </body>
    </html>
  )
}
