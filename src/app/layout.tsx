import type { Metadata } from 'next'
import './globals.css'
import { EditorProvider } from '@/context'
import { mainFont } from '@/fonts'

export const metadata: Metadata = {
  title: 'Run js web',
  description: 'Test and write your own JavaScript code in real time (TypeScript supported!)',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Run js web',
    description: 'Test and write your own JavaScript code in real time (TypeScript supported!)',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: 'Run js web',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL ?? ''}/logo.png`,
        width: 800,
        height: 600,
        alt: 'Run js web'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <EditorProvider>
      <html lang='en'>
        <body className={`${mainFont.className} bg-c1 text-c3`}>
          {children}
        </body>
      </html>
    </EditorProvider>
  )
}
