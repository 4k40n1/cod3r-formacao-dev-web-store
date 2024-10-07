import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { GoodsProvider } from '@/data/contexts/goods-context'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '600'],
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
      <body
        className={`${notoSans.className} antialiased`}
      >
        <GoodsProvider>
          {children}
        </GoodsProvider>
      </body>
    </html>
  )
}
