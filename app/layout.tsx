import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Employment - AI-Powered LinkedIn Engine',
  description: 'Build your reputation while you build your career. Get seen by the right people without overthinking a thing.',
  keywords: 'LinkedIn, AI, content creation, professional networking, career growth',
  openGraph: {
    title: 'Employment - AI-Powered LinkedIn Engine',
    description: 'Build your reputation while you build your career',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 