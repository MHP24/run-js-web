import type { Metadata } from 'next'
import './globals.css'
import { EditorProvider } from '@/context'
import { mainFont } from '@/fonts'

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
        <body className={`${mainFont.className} bg-c1 text-c3`}>
          {children}
        </body>
      </html>
    </EditorProvider>
  )
}
