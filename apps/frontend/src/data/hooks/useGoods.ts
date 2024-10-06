import { useContext } from 'react'
import GoodsContext from '../contexts/goods-context'


const useGoods = () => useContext(GoodsContext)
export default useGoods