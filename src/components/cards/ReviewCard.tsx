import React, { useState } from 'react'
import { CarouselItem } from '../ui/carousel'
import { Button } from '../ui/button'
import { Review } from '@/types'
import { Quote } from 'lucide-react'

type ReviewCardProps = {
    review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
    const [showMore, setShowMore] = useState(false)

  return (
    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
        <div className={`rounded-t-xl p-10 space-y-5 min-h-[300px] ${showMore ? "max-h-[10000px]" : "max-h-[300px]"} border border-b-transparent`}>
            <div className='flex gap-3'>
                <Quote className='size-8 text-primary shrink-0' />
                <p className='text-2xl font-semibold'>{review.name}</p>
            </div>
            <p className={`text-xl ${showMore ? "line-clamp-none" : "line-clamp-[7]"}`}>
                {review.content}
            </p>
        </div>
        <div className='rounded-b-xl p-5 pt-0 border border-t-transparent'>
            <Button variant={"link"} onClick={() => setShowMore(prev => !prev)}>{!showMore ? "Pokaż więcej" : "Pokaż mniej"}</Button>
        </div>
    </CarouselItem>
  )
}

export default ReviewCard