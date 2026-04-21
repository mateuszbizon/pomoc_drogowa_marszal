"use client"

import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { BusFront, CarFront, Cog, Fan, Siren, Truck } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { PHONE2 } from '@/constants'

function Services() {
  return (
    <section className='py-section-padding'>
        <Container>
            <HeadingInfo title='Usługi' />
            <h2 className='heading2 text-center heading-margin-bottom'>Usługi mobilnego serwisu w Zgorzelcu i okolicy</h2>
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/mobilny-serwis-tir"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <Truck className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Mobilny serwis TIR</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Awaria układu hamulcowego</li>
                                <li>Problemy z elektroniką</li>
                                <li>Diagnoza komputerowa, kasowanie błędów</li>
                                <li>Wymiana płynów eksploatacyjnych</li>
                                <li>Naprawa systemu zawieszenia</li>
                                <li>Tryb awaryjny ograniczanie mocy</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/pomoc-drogowa-zgorzelec"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <Siren className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Pomoc drogowa</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Wymiana rozrządu</li>
                                <li>Kompleksowa wymiana filtrów i oleju</li>
                                <li>Naprawa wydechu (tłumików)</li>
                                <li>Wymiana klocków, tarcz hamulcowych i amortyzatorów</li>
                                <li>Naprawa zawieszenia samochodów osobowych, dostawczych i ciężarowych</li>
                                <li>Mobilne naprawy drobnych usterek</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/naprawa-kol-zgorzelec"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <Cog className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Naprawa kół</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Wymiana kół na miejscu</li>
                                <li>Wulkanizacja uszkodzonych opon</li>
                                <li>Wyważanie kół</li>
                                <li>Diagnoza uszkodzonych felg</li>
                                <li>Wymiana opon ciężarowych i dostawczych</li>
                                <li>Wulkanizacja w terenie</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/auto-laweta-zgorzelec"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <CarFront className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Auto laweta</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Pojazdy ciężarowe</li>
                                <li>Samochody osobowe</li>
                                <li>Busy</li>
                                <li>Samochody dostawcze</li>
                                <li>Transport maszyn budowlanych</li>
                                <li>W przypadku poważnych awarii, zapewniamy transport pojazdu do wybranego warsztatu lub miejsca docelowego</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/serwis-klimatyzacji-zgorzelec"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <Fan className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Serwis klimatyzacji</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Napełnianie czynnika chłodzącego</li>
                                <li>Uzupełnianie odczynnika</li>
                                <li>Sprawdzenie szczelności układu chłodzenia</li>
                                <li>Wymiana filtrów kabinowych</li>
                                <li>Diagnostyka klimatyzacji</li>
                                <li>Dezynfekcja i czyszczenie układu</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='p-5 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 flex'>
                    <Link href={"/uslugi/pomoc-drogowa-a4"} className='flex'>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <BusFront className='text-primary size-10' />
                            <h3 className='bigger-text font-bold'>Pomoc drogowa A4</h3>
                            <ul className='space-y-3 md:text-lg font-medium'>
                                <li>Wsparcie dla pojazdów osobowych, dostawczych i ciężarowych</li>
                                <li>Awaryjne uruchamianie pojazdów</li>
                                <li>Wymiana kół i naprawa ogumienia na miejscu</li>
                                <li>Dowóz paliwa na trasie</li>
                                <li>Podstawowe naprawy mechaniczne bezpośrednio na drodze</li>
                                <li>Błyskawiczna reakcja na zgłoszenie – dostępni 24/7</li>
                            </ul>
                            <p className='little-bigger-text text-primary font-bold mt-auto'>
                                Dowiedz się więcej {">>"}
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
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