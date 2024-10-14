import { ReactNode } from 'react'
import { FaCartShopping } from 'react-icons/fa6'

interface HeaderProps {
  children?: ReactNode
}

export default function Header({children}:HeaderProps) {
  return (
    <header className='
        flex py-2 px-8 shadow-md border-b content-center w-full
        text-white bg-custom-100 border-white/20
      '>
      <div className='py-2'>Logo</div>
      <div className="flex-1">
        {children}
      </div>
      <div className='py-2'><FaCartShopping size={20} /></div>
    </header>
  )
}
