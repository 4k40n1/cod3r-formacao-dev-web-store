'use client'
import useGoods from '@/data/hooks/useGoods'
import GoodsCard from './goods-card'

export default function GoodsStock() {
  const {goodsList} = useGoods()

  return goodsList.length ? (
    <div className='flex gap-8 flex-wrap justify-center content-stretch max-w-max'>{
      Array.isArray(goodsList) ? (
        goodsList.map((goods, index) => {
          return <GoodsCard key={index} goods={goods} />
        })
      ) : (
        <div className='text-white'>{goodsList.toString()}</div>
      )
    }</div>
  ) : (
    <div className='text-white'>Loading…</div>
  )
}