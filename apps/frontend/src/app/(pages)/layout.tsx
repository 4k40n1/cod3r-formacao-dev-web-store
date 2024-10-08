export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='
      flex flex-col items-center justify-items-center h-screen w-screen
      bg-gradient-to-br from-custom-200 to-custom-100
    '>
      {children}
    </div>
  )
}