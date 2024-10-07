'use client'
import { GoodsFilter, GoodsType } from '@webstore/core'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import useApi from '../hooks/useApi'

export interface GoodsContextProps {
  goodsList: GoodsType[] | string,
  search: string,
  setSearch: (search: string) => void
}

const GoodsContext = createContext<GoodsContextProps>({} as any)

interface GoodsProviderProps {
  children: ReactNode
}

export function GoodsProvider({children}:GoodsProviderProps) {
  const {httpGet} = useApi()
  const [search, setSearch] = useState<string>('')
  const [goodsList, setGoodsList] = useState<GoodsType[] | string>([])

  const loadGoods =useCallback(
    async () => {
      const _goodsList = await httpGet('/goods')
      setGoodsList(_goodsList ?? [])
    }, [httpGet]
  )

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    loadGoods()
  }, [loadGoods])

  const getGoodsList = () => {
    if (!search || !Array.isArray(goodsList)) return goodsList
    return new GoodsFilter().execute(search, goodsList)
  }

  return (
    <GoodsContext.Provider value={{
      get goodsList() {return getGoodsList()},
      search,
      setSearch
    }}>
      {children}
    </GoodsContext.Provider>
  )
}

export default GoodsContext