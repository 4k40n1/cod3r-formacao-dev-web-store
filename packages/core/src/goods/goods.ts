export default interface GoodsType {
  id: number,
  publicId: string
  name: string,
  description?: string,
  brand: string,
  model: string,
  picture?: string,
  videoReview?: string,
  rate?: number,
  price: number,
  tags: string[]
}