import GoodsPanel from '@/components/goods/goods-panel'

interface GoodsProps {
  params: {id:string}
}

export default function Goods({params}:GoodsProps) {
  const id = params.id
  
  return (
    <GoodsPanel id={id} />
  )
}