import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion-like App',
  description: 'A note-taking application inspired by Notion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-notion-gray`}>
        <div className="flex h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
