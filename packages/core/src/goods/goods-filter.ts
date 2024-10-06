import GoodsType from "./goods";

export default class GoodsFilter {
  execute(search: string, goodsList: GoodsType[]): GoodsType[] {
    const words = search.toLowerCase().split(' ')
    return goodsList.filter((goods) => {
      const text = `${goods.name} ${goods.description} ${goods.brand}`.toLowerCase()
      return words.every((word) => text.includes(word))
    })
  }
}