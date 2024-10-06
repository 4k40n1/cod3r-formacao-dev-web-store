import { GoodsType } from '@webstore/core'

interface GoodsCardProps {
  goods: GoodsType
}

export default function GoodsCard({goods}:GoodsCardProps) {
  return (
    <div>{goods.name}</div>
  )
}