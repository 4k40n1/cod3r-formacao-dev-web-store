'use client'

import useGoods from '@/data/hooks/useGoods'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function GoodsSearch() {
  const {search, setSearch} = useGoods()
  return (
    <div className='flex justify-center w-full'>
      <div
        className='
          group flex grow max-w-screen-lg relative
          rounded-full overflow-hidden border-2
          bg-custom-100 border-custom-200 hover:bg-custom-200
          has-[:focus]:bg-white has-[:focus]:border-custom-500
          has-[:valid]:bg-white has-[:valid]:border-custom-500
        '
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='What are you looking for?'
          required
          className='
              flex-1 bg-transparent outline-none pl-4 pr-14 py-2 text-sm
              text-custom-500 selection:bg-custom-500 selection:text-white caret-custom-500
              placeholder:text-custom-200 group-[:hover]:placeholder:text-custom-100
              focus:placeholder:text-custom-100 z-10
            '
        />
        <div
          className='
            flex justify-center items-center px-4 absolute top-0 right-0 h-full
            text-custom-200 group-[:hover]:text-custom-100
            group-has-[:focus]:text-custom-500 group-has-[:valid]:text-custom-500
          '
        >
          <FaMagnifyingGlass size={20}/>
        </div>
      </div>
    </div>
  )
}