import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishnu Vantukala',
  description: 'Portfolio created using NextJS, TailwindCSS, and Typescript',
  icons: {
    icon: '/r.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
    <body className="flex flex-row flex-auto {inter.className}">
    <Navbar />
    {children}
    </body>
    </html>
  )
}
