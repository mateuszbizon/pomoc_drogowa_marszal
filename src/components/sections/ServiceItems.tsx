import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info';
import { MOBILE_TIR_SERVICE_ITEMS } from '@/constants/services';

type ServiceItemsProps = {
    title?: string;
    description?: string;
    list?: string[];
}

function ServiceItems({ title = "Co obejmuje nasz mobilny serwis TIR Zgorzelec?", description = "Nasz mobilny serwis TIR Zgorzelec działa całodobowo i dojeżdża na miejsce awarii, zapewniając szybkie i skuteczne usuwanie usterek w pojazdach ciężarowych.", list = MOBILE_TIR_SERVICE_ITEMS }: ServiceItemsProps) {
  return (
    <section className='py-section-padding'>
        <Container>
            <HeadingInfo title='Co naprawiamy' />
            <h2 className='heading2 text-center mb-10'>{title}</h2>
            <p className='text-center heading-margin-bottom bigger-text'>{description}</p>
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 text-white bigger-text'>
                {list.map((item) => (
                    <li key={item} className='bg-primary rounded-2xl flex justify-center items-center p-5 text-center'>{item}</li>
                ))}
            </ul>
        </Container>
    </section>
  )
}

export default ServiceItems