import { FaCartShopping } from 'react-icons/fa6'

export default function Header() {
  return (
    <header className='
      flex w-full py-6 px-8 shadow-md border-b
      text-white bg-custom-100 border-white/20
    '>
      <div>Logo</div>
      <div className="flex-1" />
      <div><FaCartShopping size={20} /></div>
    </header>
  )
}
