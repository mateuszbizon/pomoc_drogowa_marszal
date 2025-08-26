import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type HeadingInfoProps = ComponentProps<"p"> & {
    title?: string
}

function HeadingInfo({ className, title = "O nas", ...props }: HeadingInfoProps) {
  return (
    <p className={cn("heading3 text-primary text-center mb-5", className)} {...props}>{title}</p>
  )
}

export default HeadingInfo