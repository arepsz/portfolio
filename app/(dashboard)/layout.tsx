import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farkas Árpád | full-stack developer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
            <div className="hidden h-full lg:flex lg:w-72 lg:flex-col 
            lg:fixed lg:inset-y-0 bg-[#19191a]">
                <div>
                    <Sidebar />
                </div>
            </div>
            <main className="lg:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
  )
}
