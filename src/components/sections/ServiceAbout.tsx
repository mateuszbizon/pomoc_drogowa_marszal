import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { TRUCK_IMG8 } from '@/constants/images'
import Image from 'next/image'
import { MOBILE_TIR_SERVICE_ABOUT } from '@/constants/services'
import { Image as ImageType } from '@/types'

type ServiceAboutProps = {
    title?: string;
    subtitle?: string;
    list?: string[];
    image?: ImageType;
}

function ServiceAbout({ title = "Mobilny serwis TIR Zgorzelec – szybka pomoc na trasie", subtitle = "Profesjonalny serwis ciężarówek 24/7", list = MOBILE_TIR_SERVICE_ABOUT, image = TRUCK_IMG8 }: ServiceAboutProps) {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo title='O usłudze' />
            <h2 className='heading2 text-center heading-margin-bottom'>{title}</h2>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-5'>
                <div>
                    <figure className='relative w-full aspect-video max-w-[600px] mx-auto rounded-2xl overflow-hidden'>
                        <Image src={image.src} alt={image.alt} fill className='object-cover' />
                    </figure>
                </div>
                <div className='space-y-10'>
                    <h3 className='bigger-text font-black text-center'>{subtitle}</h3>
                    <ul className='space-y-8 font-black'>
                        {list.map(item => (
                            <li className='flex gap-4' key={item}>
                                <div>
                                    <div className='size-6 rounded-full bg-primary'></div>
                                </div>
                                <p className='little-bigger-text'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ServiceAbout