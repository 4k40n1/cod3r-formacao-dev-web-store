import { ReactElement } from 'react'
import { FaRegStar, FaStarHalfStroke, FaStar } from 'react-icons/fa6'

interface ReviewScoreProps {
  score: number,
  size?: number,
}

export default function ReviewScore({score, size}: ReviewScoreProps) {
  const starify = (score: number) => {
    const stars: ReactElement[] = []
    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push( <FaStar key={i} size={size ?? 12} /> )
      } else if (score >= i - 0.5) {
        stars.push( <FaStarHalfStroke key={i} size={size ?? 12} /> )
      } else {
        stars.push( <FaRegStar key={i} size={size ?? 12} /> )
      }
    }
    return stars
  }

  return (
    <div className='flex gap-0.5 text-custom-100' >
      {starify(score)}
    </div>
  )
}