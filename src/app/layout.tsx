import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { EditorProvider } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Run js web',
  description: 'Test and write your own javascript code in real time'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <EditorProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-c1 text-c3`}>
          {children}
        </body>
      </html>
    </EditorProvider>
  )
}
