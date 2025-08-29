import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { CarFront, Cog, Fan, Hammer, Siren, Truck } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { PHONE2 } from '@/constants'

function Services() {
  return (
    <section className='py-section-padding'>
        <Container>
            <HeadingInfo title='Usługi' />
            <h2 className='heading2 text-center heading-margin-bottom'>Usługi mobilnego serwisu w Zgorzelcu i okolicy</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                <Link href={"/uslugi/mobilny-serwis-tir"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <Truck className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Mobilny serwis TIR</h3>
                        <p className='little-bigger-text font-medium'>
                            Naprawiamy ciężarówki w miejscu awarii na trasie
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
                <Link href={"/uslugi/pomoc-drogowa"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <Siren className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Pomoc drogowa</h3>
                        <p className='little-bigger-text font-medium'>
                            Całodobowa dostępność w Zgorzelcu i Jędrzychowicach.
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
                <Link href={"/uslugi/naprawa-kol"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <Cog className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Naprawa kół</h3>
                        <p className='little-bigger-text font-medium'>
                            Szybka wulkanizacja i wymiana opon w terenie.
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
                <Link href={"/uslugi/auto-laweta"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <CarFront className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Auto laweta</h3>
                        <p className='little-bigger-text font-medium'>
                            Zwieziemy każdy pojazd z miejsca awarii.
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
                <Link href={"/uslugi/serwis-klimatyzacji"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <Fan className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Serwis klimatyzacji</h3>
                        <p className='little-bigger-text font-medium'>
                            Kompleksowy serwis klimatyzacji. Sprawdzanie szczelności układu chłodzenia. Uzupełnianie odczynnika.
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
                <Link href={"/uslugi/blacharstwo"} className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300'>
                    <div className='flex flex-col items-center gap-5 text-center'>
                        <Hammer className='text-primary size-10' />
                        <h3 className='bigger-text font-bold'>Blacharstwo</h3>
                        <p className='little-bigger-text font-medium'>
                            Naprawy blacharskie. Przetarcia, wgniecenia oraz przygotowanie do malowania.
                        </p>
                        <p className='little-bigger-text text-primary font-bold'>
                            Dowiedz się więcej {">>"}
                        </p>
                    </div>
                </Link>
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

export default Services