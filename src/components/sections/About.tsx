import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { ABOUT } from '@/constants/images'
import HeadingInfo from '../ui/heading-info'

function About() {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo />
            <h2 className='heading2 text-center heading-margin-bottom'>Serwis mobilny TIR Zgorzelec - Jędrzychowice</h2>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-5'>
                <div>
                    <figure className='relative w-full aspect-video max-w-[600px] mx-auto rounded-2xl overflow-hidden'>
                        <Image src={ABOUT.src} alt={ABOUT.alt} fill />
                    </figure>
                </div>
                <div className='space-y-10'>
                    <h3 className='bigger-text font-black text-center'>Pomoc Drogowa Zgorzelec - Jędrzychowice 24 <br /><span className='text-primary'>Bogdan Marszał</span></h3>
                    <div className='space-y-8 font-black'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <div className='size-6 rounded-full bg-primary'></div>
                            </div>
                            <p className='little-bigger-text'>24 h, "Non Stop"</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <div className='size-6 rounded-full bg-secondary'></div>
                            </div>
                            <p className='little-bigger-text'>Dojeżdżamy do każdego miejsca w Unii Europejskiej</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <div className='size-6 rounded-full bg-green'></div>
                            </div>
                            <p className='little-bigger-text'>Mobilny serwis samochodów osobowych oraz ciężarowych</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <div className='size-6 rounded-full bg-red'></div>
                            </div>
                            <p className='little-bigger-text'>Naprawy stacjonarne samochodów ciężarowych i osobowych</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About