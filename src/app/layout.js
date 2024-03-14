import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'THOROS CREATIVE MUSIC',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Toaster/>
        {children}</body>
    </html>
  )
}
