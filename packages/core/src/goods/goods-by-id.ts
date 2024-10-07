import GoodsType from "./goods";

export default class GoodsById {
  execute(id: string, goodsList: GoodsType[]): GoodsType | null {
    const goods = goodsList.find((goods) => goods.publicId === id)
    return !!goods ? goods : null
  }
}