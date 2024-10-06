'use client'
import useGoods from '@/data/hooks/useGoods'

export default function GoodsStock() {
  const {goodsList} = useGoods()
  return goodsList.length ? (
    <div>
      {goodsList.map((goods, index) => {
        return <div key={index}>{goods.name}</div>
      })}
    </div>
  ) : (
    <div>Goods not find!</div>
  )
}