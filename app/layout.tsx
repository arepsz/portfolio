import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CrispProvider } from '@/components/crisp-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { cn } from '@/lib/utils'
/*import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { ToasterProvider } from '@/components/toaster-provider';
import { CrispProvider } from '@/components/crisp-provider';*/

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desiree',
  description: 'AI platform for generate whatever you desire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <CrispProvider />
        <body className={cn("bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r min-h-screen", inter.className)}>
          <ToasterProvider />
          {children}
          </body>
      </html>
  )
}
