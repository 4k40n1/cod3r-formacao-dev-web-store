import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import Main from '@/components/template/main'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='
      flex flex-col items-center justify-items-center h-screen w-screen
      bg-gradient-to-br from-custom-200 to-custom-100
    '>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}