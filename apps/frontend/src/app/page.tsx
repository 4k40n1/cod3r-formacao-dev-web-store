import GoodsStock from '@/components/goods/goods-stock'
import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import Main from '@/components/template/main'

export default function Home() {
  return (
    <div className="
      flex flex-col items-center justify-items-center min-h-screen w-screen
      bg-gradient-to-br from-cyan-500 to-indigo-500
    ">
      <Header />
      <Main>
        <GoodsStock />
      </Main>
      <Footer />
    </div>
  )
}
