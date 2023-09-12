import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coftalmo',
  description: 'Nuestra misión es evitar el 80% de la ceguera en el LATAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex min-h-screen flex-col justify-center overflow-hidden  bg-gray-50">
        {children}
        </main>
      </body>
    </html>
  )
}
