"use client"

import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { QUESTIONS } from '@/constants/questions'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Questions() {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#question-content",
                start: "top 40%",
                once: true
            }
        })

        timeline.fromTo(".question-item", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 0.5,
        })
    }, [])

  return (
    <section id='question-content' className='py-section-padding'>
        <Container>
            <HeadingInfo title='Najczęściej zadawane pytania' />
            <h2 className='heading2 text-center heading-margin-bottom'>FAQ – mobilny serwis TIR Zgorzelec i pomoc drogowa</h2>
            <Accordion type="single" className='mx-auto max-w-[800px]' collapsible>
                {QUESTIONS.map(item => (
                    <AccordionItem value={item.title} key={item.title} className='question-item'>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    </section>
  )
}

export default Questions