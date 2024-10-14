'use client'

import useGoods from '@/data/hooks/useGoods'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function GoodsSearch() {
  const {search, setSearch} = useGoods()
  return (
    <div className='flex justify-center w-full'>
      <div className='
        flex gap-4 grow max-w-screen-lg
        rounded-full overflow-hidden border-2
        bg-white border-custom-100 hover:border-custom-200
        has-[:focus]:border-custom-500
      '>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='What are you looking for?'
          className='flex-1 bg-transparent outline-none px-4 py-2 text-sm
            text-custom-500 selection:bg-custom-500 selection:text-white
            caret-custom-500'
        />
        <div className='flex justify-center items-center px-4 text-custom-500'>
          <FaMagnifyingGlass size={20}/>
        </div>
      </div>
    </div>
  )
}