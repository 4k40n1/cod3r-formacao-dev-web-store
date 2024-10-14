import { GoodsType } from '@webstore/core'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa6'

interface GoodsCardProps {
  goods: GoodsType,
  key: number
}

export default function GoodsCard({goods, key}:GoodsCardProps) {
  return (
    <Link
      key={key}
      href={`/${goods.publicId}`}
      className='flex flex-col bg-custom-500 border border-white/20 shadow-md
      rounded-xl relative max-h-[500px] max-w-80 p-8 hover:scale-110 transition-transform'
    >
      <div className='w-full h-48 relative'>
        <Image
          src={goods.picture ?? ''}
          fill alt='goods picture'
          className='object-contain'
        />
      </div>
      <div className='flex-1 flex flex-col gap-3 p-5 border-t border-white/20'>
        <span className='text-lg font-semibold text-white'>{goods.name}</span>
        <div className='flex-1' />
        <span className='text-sm text-custom-400'>{goods.price}</span>
      </div>

      <button
        className='
          flex justify-center items-center gap-2 h-8 shadow-md
          bg-custom-400 border-custom-500 hover:border-custom-100
          text-custom-300 hover:text-custom-100 active:bg-custom-300
          border-2 rounded-full transition-colors
        '
      >
        <FaCartPlus size={20} />
        <span>Add to Cart</span>
      </button>

    </Link>
  )
}