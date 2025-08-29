import React, { PropsWithChildren } from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { Image as ImageType } from '@/types';
import { TRUCK_IMG10, TRUCK_IMG9 } from '@/constants/images';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { PHONE2 } from '@/constants';

type ServiceWhyUsProps = PropsWithChildren & {
    title?: string;
    images?: ImageType[];
}

function ServiceWhyUs({ title = "Dlaczego warto wybrać nasz mobilny serwis TIR Zgorzelec?", images = [TRUCK_IMG9, TRUCK_IMG10], children }: ServiceWhyUsProps) {
  return (
    <section className='py-section-padding bg-white'>
        <Container>
            <HeadingInfo title='Dlaczego my' />
            <h2 className='heading2 text-center heading-margin-bottom'>{title}</h2>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-5'>
                <div className='lg:order-2 space-y-15'>
                    {images.map((image, index) => (
                        <figure key={index} className='relative w-full aspect-video max-w-[600px] mx-auto rounded-2xl overflow-hidden'>
                            <Image src={image.src} alt={image.alt} fill className='object-cover' />
                        </figure>
                    ))}
                </div>
                <div>
                    <div className='space-y-10 little-bigger-text font-medium'>
                        {children}
                    </div>
                </div>
            </div>
            <p className='mt-10 text-center bigger-text font-bold'>
                Potrzebujesz natychmiastowej pomocy? Skorzystaj z usług mobilnego serwisu TIR Zgorzelec — dzwoń teraz!
            </p>
            <div className='flex justify-center mt-5'>
                <Button size={"lg"} asChild>
                    <Link href={`tel:${PHONE2}`}>
                        Zadzwoń do nas
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default ServiceWhyUs