import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactQueryProvider } from '@/providers/react-query-provider'
import { I18nProvider } from '@/i18n/i18n-provider'

export const metadata: Metadata = {
  title: 'matosNews - Real-time News Dashboard',
  description:
    'Stay informed with real-time news from around the world. Technology, sports, economy and more.'
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
    <html lang="pt" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ReactQueryProvider>
          <I18nProvider>{children}</I18nProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
