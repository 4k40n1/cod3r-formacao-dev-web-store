import GoodsSearch from '@/components/goods/goods-search'
import Header from '@/components/template/header'
import Scroller from '@/components/template/scroller'

export default function ShearchableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <GoodsSearch />
      </Header>
      <Scroller>
        {children}
      </Scroller>
    </>
  )
}