import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
}

export default function Main({children}:MainProps) {
  return (
    <main className='flex grow w-full p-8 sm:p-20 pt-8 justify-center'>
      {children}
    </main>
  )
}