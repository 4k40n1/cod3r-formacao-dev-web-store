interface GoodsProps {
  params: {id:string}
}

export default function Goods({params}:GoodsProps) {
  const id = params.id
  return (
    <div className='bg-custom-100 text-white flex justify-center items-center h-screen'>
      <div>ID: {id}</div>
    </div>
  )
}