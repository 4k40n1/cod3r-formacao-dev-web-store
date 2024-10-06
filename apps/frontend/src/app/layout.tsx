import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { GoodsProvider } from '@/data/contexts/goods-context'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['500'],
  preload: true
})

export const metadata: Metadata = {
  title: 'Web Store',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoodsProvider>
        <body
          className={`${notoSans.className} antialiased`}
        >
          {children}
        </body>
      </GoodsProvider>
    </html>
  )
}
