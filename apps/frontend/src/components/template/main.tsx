import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
}

export default function Main({children}:MainProps) {
  return (
    <main className="flex grow w-screen p-8 sm:p-20 outline-dashed outline-white">
      <div>
        {children}
      </div>
    </main>
  )
}