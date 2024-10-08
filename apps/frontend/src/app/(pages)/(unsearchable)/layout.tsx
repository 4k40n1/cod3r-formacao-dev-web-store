import Header from '@/components/template/header'
import Scroller from '@/components/template/scroller'

export default function UnshearchableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <Scroller>
        {children}
      </Scroller>
    </>
  )
}