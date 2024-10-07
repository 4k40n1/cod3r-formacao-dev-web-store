'use client'

import useGoods from '@/data/hooks/useGoods'

interface GoodsPanelProps {
  id: string
}

export default function GoodsPanel({id}:GoodsPanelProps) {
  const {goodsById} = useGoods()
  const goods = goodsById(id)
  return (!!goods ? (
    <div className='flex flex-col text-white'>
      <span>{goods.name}</span>
      <span>{goods.brand}</span>
      <span>{goods.model}</span>
      <span>{goods.description}</span>
    </div>
  ) : (
    <div />
  ))
}