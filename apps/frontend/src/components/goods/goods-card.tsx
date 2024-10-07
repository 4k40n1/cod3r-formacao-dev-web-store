import { GoodsType } from '@webstore/core'
import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa6'

interface GoodsCardProps {
  goods: GoodsType,
  key: number
}

export default function GoodsCard({goods, key}:GoodsCardProps) {
  return (
    <div
      key={key}
      className='flex flex-col bg-violet-950 border border-white/10
      rounded-xl relative max-w-80 p-8 hover:scale-110 transition-transform'
    >
      <div className='w-full h-48 relative'>
        <Image
          src={goods.picture ?? ''}
          fill alt='goods picture'
          className='object-contain'
        />
      </div>
      <div className='flex-1 flex flex-col gap-3 p-5 border-t border-white/10'>
        <span className='text-lg font-semibold text-white'>{goods.name}</span>
        <div className='flex-1' />
        <span className='text-sm text-emerald-400'>{goods.price}</span>
      </div>

      <button
        className='flex justify-center items-center gap-2 h-8
        bg-violet-700 border-violet-950 hover:border-emerald-500
        text-violet-950 hover:text-emerald-500
        border-2 rounded-full transition-colors'
      >
        <FaCartPlus size={20} />
        <span>Add to Cart</span>
      </button>

    </div>
  )
}