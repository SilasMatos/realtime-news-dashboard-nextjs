import './globals.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ReactQueryProvider from '@/providers/react-query-provider'
export const metadata: Metadata = {
  title: 'Template Auth Next.js',
  description: 'A simple authentication template using Next.js and Tailwind CSS'
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body cz-shortcut-listen="true" className={poppins.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
