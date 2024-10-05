export default interface GoodsType {
  id: number | string,
  name: string,
  description?: string,
  brand: string,
  model: string,
  picture?: string,
  rate?: number,
  videoReview?: string,
  tags: string[]
}