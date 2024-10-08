import { ReactNode } from 'react'
import Footer from './footer'
import Main from './main'

interface ScrollerProps {
  children: ReactNode
}

export default function Scroller({children}:ScrollerProps) {
  return (
    <div className="flex-1 flex flex-col w-full justify-between overflow-y-scroll">
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}