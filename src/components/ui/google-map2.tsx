import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type GoogleMap2Props = ComponentProps<"div"> & {
    lat?: number;
    lng?: number;
    zoom?: number;
}

function GoogleMap2({ className, lat = 51.14139469752247, lng = 15.059392828835831, zoom = 12,  ...props }: GoogleMap2Props) {
  return (
    <div className={cn('w-full aspect-video', className)} {...props}>
        <iframe src={`https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap2