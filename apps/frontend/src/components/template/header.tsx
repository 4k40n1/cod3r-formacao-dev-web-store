import { FaCartShopping } from 'react-icons/fa6'

export default function Header() {
  return (
    <header className="
      flex w-full py-6 px-8
      text-white opacity-70 bg-gradient-to-br from-blue-950 to-purple-950
    ">
      <div>Logo</div>
      <div className="flex-1" />
      <div><FaCartShopping size={20} /></div>
    </header>
  )
}
